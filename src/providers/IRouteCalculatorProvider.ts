import { Location } from "aws-sdk";

export interface ICalculateDTO {
  CalculatorName: string;
  DeparturePosition: number[];
  DestinationPosition: number[];
  DistanceUnit: string;
  WaypointPositions: number[][];
}

export interface IRouteCalculatorProvider {
  calculate(route: ICalculateDTO): Promise<Location.CalculateRouteResponse>;
}
