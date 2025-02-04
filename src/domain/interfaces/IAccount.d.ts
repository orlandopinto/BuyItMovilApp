import { AccountViewModel } from '../../infrastructure/models/AccountViewModel';
import { LoginViewModel } from '../../infrastructure/models/LoginViewModel';
import { RegisterViewModel } from '../../infrastructure/models/RegisterViewModel';
import { TokenResult } from '../entities/TokenResult';

export interface IAccount {
     Login: (loginViewModel: LoginViewModel) => Promise<string>;
     AccountExists: (accountViewModel: AccountViewModel) => Promise<string>;
     Register: (registerViewModel: RegisterViewModel) => Promise<string>;
     RefreshToken: (tokenResult: TokenResult) => Promise<string>;
}