"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const config_1 = __importDefault(require("./config"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const CustomErrorHandler_1 = require("./middlewares/CustomErrorHandler");
const app = (0, express_1.default)();
const port = parseInt(config_1.default.port);
app.use(express_1.default.json());
(0, routing_controllers_1.useContainer)(typedi_1.Container);
(0, routing_controllers_1.useExpressServer)(app, {
    controllers: [path_1.default.join(__dirname, "/controllers/*.js")],
    middlewares: [CustomErrorHandler_1.CustomErrorHandler],
    classTransformer: false,
    defaultErrorHandler: false,
    cors: true,
});
app.get("/", (req, res) => {
    res.send("Welcome to Todo");
});
app.listen(port, () => {
    console.log("app listening to port");
});
//# sourceMappingURL=index.js.map