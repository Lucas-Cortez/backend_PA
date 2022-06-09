import { Stop, Stop_Historic } from "@prisma/client";
import { Location } from "aws-sdk";
import { prisma } from "../../../infra/database";
import { AmazonRouteCalculatorProvider } from "../../../providers/implementations/aws/AmazonRouteCalculatorProvider";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";

export class CalculateNewLineUseCase {
  constructor(
    private prismaLineRepository: PrismaLineRepository,
    private amazonRouteCalculatorProvider: AmazonRouteCalculatorProvider
  ) {}

  public async execute(id: number): Promise<resp> {
    // public async execute(id: number): Promise<Location.CalculateRouteResponse | null> {
    // public async execute(id: number): Promise<Stop[] | null> {
    const data = await this.prismaLineRepository.findAllStops(id);
    // console.log(data);

    const first = data.slice(0, 1);
    const middle = data.slice(1, -1);
    data.reverse();
    const last = data.slice(0, 1);
    data.reverse();

    const toCalcule = {
      CalculatorName: "explore.route-calculator",
      DeparturePosition: [first[0].longitude, first[0].latitude],
      DestinationPosition: [last[0].longitude, last[0].latitude],
      DistanceUnit: "Kilometers",
      WaypointPositions: middle.map((item) => [item.longitude, item.latitude]),
    };

    // const teste = await prisma.$queryRaw<Stop_Historic[]>`
    //   SELECT *
    //   FROM stop_historic
    //   WHERE
    //     id_line = ${id}
    //     AND DATE_FORMAT(time, '%H:%i') BETWEEN '15:00' AND '20:00';
    // `;

    console.log(toCalcule);

    const calculated = await this.amazonRouteCalculatorProvider.calculate(toCalcule);

    // console.log(calculated);

    let pointsRemoved: Number[] = [];
    const newPositions = calculated.Legs.filter((leg, index) => {
      if (!(leg.Distance > 0.5)) pointsRemoved.push(index);
      return leg.Distance > 0.5;
    });

    console.log(pointsRemoved);

    let newCalculated = null;
    console.log(newPositions.length);
    console.log(calculated.Legs.length);

    if (newPositions.length < calculated.Legs.length) {
      const positions = newPositions.map((leg) => leg.StartPosition);
      const lastPosition = newPositions.pop();
      if (lastPosition?.EndPosition) positions.push(lastPosition.EndPosition);

      const newFirst = positions.slice(0, 1);
      const newMiddle = positions.slice(1, -1);
      positions.reverse();
      const newLast = positions.slice(0, 1);
      positions.reverse();

      const toNewCalcule = {
        CalculatorName: "explore.route-calculator",
        DeparturePosition: newFirst[0],
        DestinationPosition: newLast[0],
        DistanceUnit: "Kilometers",
        WaypointPositions: newMiddle,
      };

      newCalculated = await this.amazonRouteCalculatorProvider.calculate(toNewCalcule);

      // console.log(newCalculated);
    }

    const newPoints = data.filter((_, index) => {
      return pointsRemoved.indexOf(index) < 0;
    });

    const res = {
      route: {
        totalStops: data.length,
        stops: data,
        distance: calculated.Summary.Distance,
        seconds: calculated.Summary.DurationSeconds,
      },
      newRoute: newCalculated
        ? {
            totalStops: newPoints.length,
            stops: newPoints,
            distance: newCalculated.Summary.Distance,
            seconds: newCalculated.Summary.DurationSeconds,
          }
        : null,
    };

    console.log(res);

    // if (newCalculated) {
    //   res.newRoute = {

    //   }
    // }

    // console.log(calculated.Legs.length);
    // console.log(newCalculated.length);
    // return calculated;
    return res;
    // return data;
  }
}

type resp = {
  route: {
    totalStops: number;
    stops: Stop[];
    distance: number;
    seconds: number;
  };
  newRoute: {
    totalStops: number;
    stops: Stop[];
    distance: number;
    seconds: number;
  } | null;
};
