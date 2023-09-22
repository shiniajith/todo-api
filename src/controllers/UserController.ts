import { Body, JsonController, Post } from "routing-controllers";
import { User } from "../models/User";
import { CreateUserInput } from "../types/userTypes";
import { UserServices } from "../services/UserService";
import { Service } from "typedi";

@Service()
@JsonController("/users")
export class UserController {
  constructor(private userService: UserServices) {}

  @Post("/")
  async createUser(@Body() data: CreateUserInput): Promise<User> {
    const user = await this.userService.createUser(data);
    return user;
  }
}
