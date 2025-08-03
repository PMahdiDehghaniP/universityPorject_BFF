const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const {
  GRPC_CLIENTS,
  GRPC_PACKAGE_DEFENITION_OPTION,
} = require("../constants/grpcConstants");

const grpcClients = {};

const setAllGrpcClients = () => {
  try {
    GRPC_CLIENTS.forEach((clientInfo) => {
      const { filePath, packageName, serviceName, target } = clientInfo;
      const packageDefenition = protoLoader.loadSync(
        filePath,
        GRPC_PACKAGE_DEFENITION_OPTION
      );
      const grpcObject = grpc.loadPackageDefinition(packageDefenition);
      const servicePackage = grpcObject[packageName];
      if (!servicePackage || !servicePackage[serviceName]) {
        console.error(`❌ Service not found: ${packageName}.${serviceName}`);
        process.exit(1);
      }
      const ClientConstructor = servicePackage[serviceName];
      const grpcClientInstance = new ClientConstructor(
        target,
        grpc.credentials.createInsecure()
      );
      grpcClients[`${packageName}.${serviceName}`] = grpcClientInstance;
      console.log(`✅ GRPC client added: ${packageName}.${serviceName}`);
    });
  } catch (error) {
    console.error("❌ Error in setting up gRPC clients:", error);
    process.exit(1);
  }
};

const getGrpcClient = (packageName, serviceName) =>
  grpcClients[`${packageName}.${serviceName}`];

module.exports = { setAllGrpcClients, getGrpcClient };
