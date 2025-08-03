const dotEnv = require("dotenv");
const path = require("path");
const express = require("express");
dotEnv.config({ path: path.join(__dirname, "/config/config.env") });
const { setAllGrpcClients } = require("./config/grpc/clientProvider");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./graphql/index");

setAllGrpcClients();
const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    return {
      message: err.message,
      code: err.extensions?.code || "INTERNAL_SERVER_ERROR",
    };
  },
});

const PORT = process.env.BFF_PORT || 5000;

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

startServer();
