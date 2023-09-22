import { UserDetails } from "../userTypes";

// to make the file a module and avoid the TypeScript error
// to add extra property to already existing Request interface in express
export {};

declare global {
  namespace Express {
    export interface Request {
      user?: UserDetails;
    }
  }
}
