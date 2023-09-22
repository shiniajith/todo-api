import * as bcrypt from "bcryptjs";
import { CreateUserInput } from "../types/userTypes";
import { Service } from "typedi";
import { User } from "../models/User";

@Service()
export class UserServices {
  async createUser(userData: CreateUserInput): Promise<User> {
    const createUserData = {
      ...userData,
    };
    createUserData.password = bcrypt.hashSync(createUserData.password);
    const user = await User.create(createUserData);
    return user;
  }
}
