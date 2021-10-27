import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import * as Http from "http";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import { createContext } from "./context";

async function startApolloServer() {
  const port = process.env.PORT || 3000;
  const app = express();
  dotenv.config();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const httpServer = Http.createServer(app);

  const apollo = new ApolloServer({
    schema,
    context: createContext,
  });
  await apollo.start()

  apollo.applyMiddleware({
    app,
  });

  await new Promise<void>((resolve) => {
    httpServer.listen({port: port});
    resolve();
  })

  console.log(
    `🚀 Server ready at http://localhost:${process.env.PORT}/graphql`
  );
}

startApolloServer();
