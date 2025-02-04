import { TokenResult } from './TokenResult';

export type LoginResult = {
     isAuthenticated: boolean,
     email?: string,
     fullName?: string,
     isAdmin?: boolean,
     userName?: string,
     tokenResult?: TokenResult
}
