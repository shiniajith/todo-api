export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginSuccessResponse {
  token: string;
}

export interface LoginFailedResponse {
  message: string;
}

export interface JwtTokenPayload {
  id: number;
}

export type LoginResponse = LoginSuccessResponse | LoginFailedResponse;
