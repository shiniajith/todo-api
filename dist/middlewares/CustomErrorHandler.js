"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorHandler = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
let CustomErrorHandler = class CustomErrorHandler {
    error(error, request, response, next) {
        if (error instanceof routing_controllers_1.HttpError) {
            response.status(error.httpCode).send({ message: error.message });
        }
        else {
            response.status(500).send({
                message: "Unknown error, Internal server error",
            });
        }
        next();
    }
};
exports.CustomErrorHandler = CustomErrorHandler;
exports.CustomErrorHandler = CustomErrorHandler = __decorate([
    (0, typedi_1.Service)(),
    (0, routing_controllers_1.Middleware)({ type: "after" })
], CustomErrorHandler);
//# sourceMappingURL=CustomErrorHandler.js.map