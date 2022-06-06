import { CognitoIdentityCredentials, Location } from "aws-sdk";

export class AmazonRouteCalculatorProvider {
  private locationService: Location;

  constructor(credentials: CognitoIdentityCredentials) {
    this.locationService = new Location({ credentials });
  }

  public async calculate(route: ICalculateDTO): Promise<Location.CalculateRouteResponse> {
    return await this.locationService.calculateRoute(route).promise();
  }
}

interface ICalculateDTO {
  CalculatorName: string;
  DeparturePosition: number[];
  DestinationPosition: number[];
  DistanceUnit: string;
  WaypointPositions: number[][];
}
