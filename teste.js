// const AWS = require("aws-sdk");

// AWS.config.region = "us-east-1";

// const credentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: "us-east-1:eed0ba51-e10e-4b1f-9a19-aef787b73f38",
// });

// const location = new AWS.Location({
//   credentials,
// });

// const params1 = {
//   CalculatorName: "explore.route-calculator",
//   DeparturePosition: [-47.37698425238374, -22.366734701707657],
//   DestinationPosition: [-47.37290463003886, -22.375856719077277],
//   DistanceUnit: "Kilometers",
// };

// // const params = {
// //   CalculatorName: "explore.route-calculator",
// //   DeparturePosition: [-47.37698425238374, -22.366734701707657],
// //   DestinationPosition: [-47.37290463003886, -22.375856719077277],
// //   // WaypointPositions: [
// //   //   [-47.3762900446507, -22.36621713761536],
// //   //   [-47.37269758588062, -22.37047650388745],
// //   // ],
// //   // TravelMode: "Truck",
// //   IncludeLegGeometry: false,
// //   DistanceUnit: "Kilometers",
// //   DepartNow: false,
// //   // TruckModeOptions: {
// //   //   AvoidFerries: false,
// //   //   AvoidTolls: false,
// //   //   Dimensions: {
// //   //     Height: 4.11,
// //   //     Length: 21.34,
// //   //     Unit: "Meters",
// //   //     Width: 2.59,
// //   //   },
// //   //   Weight: {
// //   //     Total: 31751.47,
// //   //     Unit: "Kilograms",
// //   //   },
// //   // },
// // };

// const p2 = {
//   CalculatorName: "explore.route-calculator",
//   DeparturePosition: [-123.4567, 45.6789],
//   DestinationPosition: [-123.123, 45.234],
// };

// async function name(params) {
//   const rsp = await location.calculateRoute(params1).promise();

//   console.log(rsp);
// }

// name();

const data = new Date("2022-06-08 17:58:18");
// console.log(data.);
