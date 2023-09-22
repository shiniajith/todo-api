import * as bcrypt from "bcryptjs";
import * as jsonwebtoken from "jsonwebtoken";

import { User } from "../models/User";
import {
  JwtTokenPayload,
  LoginSuccessResponse,
  UserCredentials,
} from "../types/authTypes";
import { Service } from "typedi";
import { UnauthorizedError } from "routing-controllers";
import config from "../config";

@Service()
export class AuthService {
  async userLogin(credentials: UserCredentials) {
    const user = await User.findOne({
      where: { username: credentials.username },
    });
    if (!user) {
      return false;
    }

    const isValidPassword = bcrypt.compareSync(
      credentials.password,
      user.password
    );

    if (!isValidPassword) {
      return false;
    }

    const token = jsonwebtoken.sign({ id: user.id }, config.jwtSecret, {
      expiresIn: 60 * 60,
    });

    return token;
  }

  async authenticateToken(token: string): Promise<User> {
    let decodedToken: JwtTokenPayload;
    try {
      decodedToken = jsonwebtoken.verify(
        token,
        config.jwtSecret
      ) as JwtTokenPayload;
    } catch (e) {
      throw new UnauthorizedError("Invalid Credentials");
    }

    const user = await User.findByPk(decodedToken.id);
    if (!user) {
      throw new UnauthorizedError("Invalid Credentials");
    }
    return user;
  }
}
