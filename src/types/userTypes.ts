import { UserCredentials } from "./authTypes";

export type CreateUserInput = UserCredentials;

export interface UserDetails {
  id: number;
  username: string;
}
