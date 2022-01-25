// import path from "path";
// import * as grpc from "@grpc/grpc-js";
// import * as protoLoader from "@grpc/proto-loader";
// //@ts-ignore
// import { ApplicationConfigHandlers } from "../proto/applicationConfigPackage/ApplicationConfig";

// import { ProtoGrpcType } from "../../proto/application-config";

import React from "react";

const Client = () => {
  const PORT = 9090;
  const PROTO_FILE = "../../proto/application-config.proto";

  // const packageDef = protoLoader.loadSync(PROTO_FILE);
  // const grpcObj = grpc.loadPackageDefinition(
  //   packageDef
  // ) as unknown as ProtoGrpcType;

  // const applicationConfigPackage = grpcObj.applicationConfigPackage;

  // const client = new applicationConfigPackage.ApplicationConfig(
  //   `0.0.0.0:${PORT}`,
  //   grpc.credentials.createInsecure()
  // );

  // const deadline = new Date();

  // deadline.setSeconds(deadline.getSeconds() + 5);
  // client.waitForReady(deadline, (err) => {
  //   if (err) {
  //     console.log("CLIENT ERROR:", err);
  //     return;
  //   }
  //   onClientReady();
  // });

  // function onClientReady() {
  //   client.PingPong({ message: "Ping" }, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log("RESULT:", result);
  //   });

  //   //   const stream = client.TestStream({
  //   //     message: "heeey",
  //   //   });
  //   //   stream.on("data", (chunk) => console.log("CHUNK:", chunk));
  //   //   stream.on("end", () => {
  //   //     console.log("COMMUNICATION ENDED");
  //   //   });

  //   const stream = client.TestStream({});
  //   stream.on("data", (chunk) => console.log("CHUNK:", chunk));
  //   stream.on("end", () => {
  //     console.log("COMMUNICATION ENDED");
  //   });
  // }
  return (
    <div>
      <h1>SURVEY DASHBOARD</h1>
    </div>
  );
};

export default Client;
