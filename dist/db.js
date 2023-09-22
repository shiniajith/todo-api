"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const sequelize_1 = require("sequelize");
const dbConnection = new sequelize_1.Sequelize(config_1.default.dbName, config_1.default.dbUser, config_1.default.dbPassword, {
    host: config_1.default.dbHost,
    dialect: "mysql",
});
function authenticateConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield dbConnection.authenticate();
            console.log("database connected...");
        }
        catch (err) {
            console.log(err.message);
        }
    });
}
authenticateConnection();
exports.default = dbConnection;
//# sourceMappingURL=db.js.map