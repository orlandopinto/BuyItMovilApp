import { TokenResult } from "./TokenResult";

export type AuthProfile = {
     isAuthenticated: boolean
     userName: string;
     email: string;
     fullName: string;
     tokenResult: TokenResult
};

export type InitializeAuthProfile = Partial<AuthProfile>