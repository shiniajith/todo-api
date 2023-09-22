import { NextFunction } from "express";
import {
  Middleware,
  ExpressErrorMiddlewareInterface,
  HttpError,
} from "routing-controllers";
import { Service } from "typedi";

@Service()
@Middleware({ type: "after" })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: NextFunction) {
    if (error instanceof HttpError) {
      response.status(error.httpCode).send({ message: error.message });
    } else {
      response.status(500).send({
        message: "Unknown error, Internal server error",
      });
    }
    next();
  }
}
