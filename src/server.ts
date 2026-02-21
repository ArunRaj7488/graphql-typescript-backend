import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";

import { typeDefs } from "./modules/user.types";
import { resolvers } from "./modules/user.resolver";

export const startServer = async () => {

  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    "/users",
    cors(),
    bodyParser.json(),
    expressMiddleware(server)
  );

  return app;
};