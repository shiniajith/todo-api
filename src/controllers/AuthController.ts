import { Service } from "typedi";
import { AuthService } from "../services/AuthService";
import { LoginResponse, UserCredentials } from "../types/authTypes";
import { Body, Controller, Post } from "routing-controllers";

@Service()
@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  async login(@Body() credentials: UserCredentials): Promise<LoginResponse> {
    const token = await this.authService.userLogin(credentials);
    if (token) {
      return { token };
    } else {
      return { message: "invalid credentials" };
    }
  }
}
