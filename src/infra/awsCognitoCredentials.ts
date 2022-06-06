import { CognitoIdentityCredentials, config } from "aws-sdk";
// import AWS from "aws-sdk";

// const IdentityPoolId = process.env.POOLID;
config.region = "us-east-1";

const credentials = new CognitoIdentityCredentials({
  IdentityPoolId: "us-east-1:eed0ba51-e10e-4b1f-9a19-aef787b73f38",
});

// const location = new Location({
//   credentials,
//   region: config.region,
// });

export { credentials };

// AWS.config.region = "us-east-1";

// const credentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: "us-east-1:eed0ba51-e10e-4b1f-9a19-aef787b73f38",
//   //   IdentityPoolId
// });

// const location = new AWS.Location({
//   credentials,
//   region: AWS.config.region,
// });
