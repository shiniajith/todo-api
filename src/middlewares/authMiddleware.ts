import { Request, Response, NextFunction } from "express";

import { AuthService } from "../services/AuthService";
import Container from "typedi";

export async function autheriseUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authService = Container.get(AuthService);
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send({ message: "Invalid credentials" });
  }
  const jwtToken = token.replace("Bearer ", "");

  try {
    const authUser = await authService.authenticateToken(jwtToken);

    req.user = authUser.toJSON();
  } catch (e) {
    return next(e);
  }

  next();
}
