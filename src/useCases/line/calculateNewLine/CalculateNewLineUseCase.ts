import { Stop } from "@prisma/client";
import { AmazonRouteCalculatorProvider } from "../../../providers/implementations/aws/AmazonRouteCalculatorProvider";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";

export class CalculateNewLineUseCase {
  constructor(
    private prismaLineRepository: PrismaLineRepository,
    private amazonRouteCalculatorProvider: AmazonRouteCalculatorProvider
  ) {}

  public async execute(id: number): Promise<Stop[] | null> {
    const data = await this.prismaLineRepository.findAllStops(id);
    // const [...newData] = data;

    // const first = data?.slice(0,1)

    const first = data?.slice(0, 1);
    const middle = data?.slice(1, -1);
    data?.reverse();
    const last = data?.slice(0, 1);
    // const last = data?.splice(-1, 1);
    data?.reverse();

    // console.log(data);
    console.log(first);
    console.log(last);

    const toCalcule = {
      CalculatorName: "explore.route-calculator",
      DeparturePosition: [first[0].longitude, first[0].latitude],
      DestinationPosition: [last[0].longitude, last[0].latitude],
      DistanceUnit: "Kilometers",
      WaypointPositions: middle?.map((item) => [item.longitude, item.latitude]),
    };

    console.log(toCalcule);

    const calculated = await this.amazonRouteCalculatorProvider.calculate(toCalcule);

    console.log(calculated);
    return data;
  }
}

// interface ICalculateDTO {
//   CalculatorName: string;
//   DeparturePosition: number[];
//   DestinationPosition: number[];
//   DistanceUnit: string;
//   WaypointPositions: number[][];
// }
