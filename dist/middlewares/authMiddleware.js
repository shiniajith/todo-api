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
exports.autheriseUser = void 0;
const AuthService_1 = require("../services/AuthService");
const typedi_1 = __importDefault(require("typedi"));
function autheriseUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authService = typedi_1.default.get(AuthService_1.AuthService);
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ message: "Invalid credentials" });
        }
        const jwtToken = token.replace("Bearer ", "");
        try {
            const authUser = yield authService.authenticateToken(jwtToken);
            req.user = authUser.toJSON();
        }
        catch (e) {
            return next(e);
        }
        next();
    });
}
exports.autheriseUser = autheriseUser;
//# sourceMappingURL=authMiddleware.js.map