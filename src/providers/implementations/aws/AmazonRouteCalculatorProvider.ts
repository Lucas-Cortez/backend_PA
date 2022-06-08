import { CognitoIdentityCredentials, Location } from "aws-sdk";
import { ICalculateDTO, IRouteCalculatorProvider } from "../../IRouteCalculatorProvider";

export class AmazonRouteCalculatorProvider implements IRouteCalculatorProvider {
  private locationService: Location;

  constructor(credentials: CognitoIdentityCredentials) {
    this.locationService = new Location({ credentials });
  }

  public async calculate(route: ICalculateDTO): Promise<Location.CalculateRouteResponse> {
    return await this.locationService.calculateRoute(route).promise();
  }
}
