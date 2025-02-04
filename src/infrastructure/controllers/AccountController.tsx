import { CustomError } from "../../domain/entities/CustomError";
import { LoginViewModel } from "../models/LoginViewModel";
import JSONDataService from '../../data/services/JSONDataService';
import { User } from "../../domain/entities/User";

//class AccountController implements IAccount {
class AccountController {

     service: JSONDataService;

     constructor() {
          this.service = new JSONDataService();
     }

     public async Login(entity: LoginViewModel): Promise<User[]> {
          try {
               const response = await this.service.Login();
               return response
          } catch (err) {
               console.log('err from controloller: ', err)
               const error = err as CustomError
               throw err as CustomError
          }
     }

     // public async RefreshToken(entity: TokenResult): Promise<string> {
     //      try {
     //           return await this.service.RefreshToken(entity);
     //      } catch (err) {
     //           throw err as CustomError
     //      }
     // }

     // public async AccountExists(entity: AccountViewModel): Promise<string> {
     //      try {
     //           return await this.service.AccountExists(entity);
     //      } catch (err) {
     //           throw err as CustomError
     //      }
     // }

     // public async Register(entity: RegisterViewModel): Promise<string> {
     //      try {
     //           return await this.service.Register(entity);
     //      } catch (err) {
     //           throw err as CustomError
     //      }
     // }
}

export default AccountController