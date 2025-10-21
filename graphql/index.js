const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const path = require("path");

const typeDefsArray = loadFilesSync(path.join(__dirname, "./schemas"), {
  extensions: ["gql"],
});
const resolversArray = loadFilesSync(path.join(__dirname, "./resolvers"));

const typeDefs = mergeTypeDefs(typeDefsArray);
const resolvers = mergeResolvers(resolversArray);

module.exports = {
  typeDefs,
  resolvers,
};
