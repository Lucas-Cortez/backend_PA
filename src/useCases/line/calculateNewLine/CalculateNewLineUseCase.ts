import { Stop } from "@prisma/client";
import { Location } from "aws-sdk";
import { AmazonRouteCalculatorProvider } from "../../../providers/implementations/aws/AmazonRouteCalculatorProvider";
import { PrismaLineRepository } from "../../../repositories/implementations/prisma/PrismaLineRepository";

export class CalculateNewLineUseCase {
  constructor(
    private prismaLineRepository: PrismaLineRepository,
    private amazonRouteCalculatorProvider: AmazonRouteCalculatorProvider
  ) {}

  // public async execute(id: number): Promise<Location.CalculateRouteResponse | null> {
  public async execute(id: number): Promise<Stop[] | null> {
    const data = await this.prismaLineRepository.findAllStops(id);

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

    // console.log(toCalcule);

    const params = {
      CalculatorName: "explore.route-calculator",
      DeparturePosition: [-47.38321437848689, -22.363164916342054],
      DestinationPosition: [-47.36266320167943, -22.3681243773202],
      WaypointPositions: [
        [-47.380582944317105, -22.36195763069599],
        [-47.379218909420544, -22.362419244575133],
        [-47.376224686477755, -22.36432723237858],
        [-47.37331760678087, -22.362848755343492],
        [-47.3719757513148, -22.3650952474524],
        [-47.371027183010206, -22.366733357682676],
        [-47.370738964549815, -22.36830486194755],
        [-47.37064036349778, -22.36993948819065],
        [-47.36940405799944, -22.372009051820726],
        [-47.36741132067909, -22.372258220490483],
        [-47.365973733396835, -22.369987340534923],
        [-47.36579568125325, -22.368201549048575],
        [-47.364331834866654, -22.367977049358874],
      ],
      TravelMode: "Truck",
      DistanceUnit: "Kilometers",
      TruckModeOptions: {
        Dimensions: {
          Height: 4,
          Length: 25.0,
          Unit: "Meters",
          Width: 2.6,
        },
        Weight: {
          Total: 30000,
          Unit: "Kilograms",
        },
      },
    };

    const calculated = await this.amazonRouteCalculatorProvider.calculate(params);

    console.log(calculated);
    // return calculated;
    return data;
  }
}
