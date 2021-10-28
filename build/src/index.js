"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const Http = __importStar(require("http"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./schema");
const context_1 = require("./context");
async function startApolloServer() {
    const port = process.env.PORT || 3000;
    const app = (0, express_1.default)();
    dotenv.config();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    const httpServer = Http.createServer(app);
    const apollo = new apollo_server_express_1.ApolloServer({
        schema: schema_1.schema,
        context: context_1.createContext,
    });
    await apollo.start();
    apollo.applyMiddleware({
        app,
    });
    await new Promise((resolve) => {
        httpServer.listen({ port: port });
        resolve();
    });
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
}
startApolloServer();
