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
const app = (0, express_1.default)();
dotenv.config();
const port = 3000;
// app.listen(process.env.PORT, err => {
//     if(err)
//         return console.error(err);
//     return console.log(`server is running on http://localhost:${process.env.PORT}`);
// })
app.get("/", async (req, res) => {
    return res.status(200).send("Hello, Welcome to pokoknumpuk.😁");
});
try {
    app.listen(process.env.PORT, () => {
        console.log(`server is running on http://localhost:${process.env.PORT}`);
    });
}
catch (error) {
    console.error(error);
}
