const dotEnv = require("dotenv");
const path = require("path");
dotEnv.config({ path: path.join(__dirname, "/config/config.env") });
const { setAllGrpcClients } = require("./config/grpc/clientProvider");

setAllGrpcClients();
