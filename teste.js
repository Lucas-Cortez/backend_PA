const AWS = require("aws-sdk");

AWS.config.region = "us-east-1"; // Region
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1:eed0ba51-e10e-4b1f-9a19-aef787b73f38',
// });

const credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:eed0ba51-e10e-4b1f-9a19-aef787b73f38", // e.g., us-east-1:d40a3a95-a6b5-4816-a15c-a15ac4f0930d
});

const location = new AWS.Location({
  credentials,
  region: AWS.config.region, // region containing Cognito pool
});

// console.log(client.getMapStyleDescriptor("explore.route-calculator"));

const params = {
  CalculatorName: "explore.route-calculator",
  DeparturePosition: [-47.37833121440518, -22.363815522591434],
  DestinationPosition: [-47.36962766656961, -22.371790537391036],
  WaypointPositions: [
    [-47.3762900446507, -22.36621713761536],
    [-47.37269758588062, -22.37047650388745],
  ],
  TravelMode: "Truck",
  IncludeLegGeometry: false,
  DistanceUnit: "Kilometers",
  DepartNow: false,
  TruckModeOptions: {
    AvoidFerries: false,
    AvoidTolls: false,
    Dimensions: {
      Height: 4.11,
      Length: 21.34,
      Unit: "Meters",
      Width: 2.59,
    },
    Weight: {
      Total: 31751.47,
      Unit: "Kilograms",
    },
  },
};

const p2 = {
  CalculatorName: "explore.route-calculator",
  DeparturePosition: [-123.4567, 45.6789],
  DestinationPosition: [-123.123, 45.234],
};

location.calculateRoute(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});
