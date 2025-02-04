import axios, { AxiosHeaders } from "axios";
import { CustomError } from "../../domain/entities/CustomError";
import { TokenResult } from "../../domain/entities/TokenResult";
import { IAccount } from "../../domain/interfaces/IAccount";
import { AccountViewModel } from "../../infrastructure/models/AccountViewModel";
import { LoginViewModel } from "../../infrastructure/models/LoginViewModel";
import { RegisterViewModel } from "../../infrastructure/models/RegisterViewModel";
import { _Headers, ACCOUNT_END_POINT, API_END_POINT, METHOD } from "../../utils/constants";

export default class ServiceAccount implements IAccount {

     headers: _Headers = { 'Content-type': 'application/json', 'accept': '*/*', };
     ENDPOINT: string

     constructor() {
          this.ENDPOINT = `${API_END_POINT.URL_BASE + ACCOUNT_END_POINT.URL}`
     }

     public async Login(loginViewModel: LoginViewModel): Promise<string> {
          return Promise.resolve(

               axios({
                    url: `${this.ENDPOINT}login`,
                    data: JSON.stringify(loginViewModel),
                    method: METHOD.POST,
                    headers: this.headers as AxiosHeaders,
               })
                    .then(res => res.data)
                    .catch(error => {
                         if (error.response) {
                              // Server responded with a status other than 200 range
                              console.log(error.response.data);
                              console.log(error.response.status);
                              console.log(error.response.headers);
                         } else if (error.request) {
                              // Request was made but no response was received

                              console.error("request Error", JSON.stringify(error.request));
                         } else {
                              // Error occurred in setting up the request
                              console.error("Error", JSON.parse(error.message));
                         }

                         const err = new CustomError({ message: error.toString(), name: 'API Error' });
                         throw err.throwCustomError()
                    })
          )
     }

     public async AccountExists(accountViewModel: AccountViewModel): Promise<string> {
          return Promise.resolve(
               axios({
                    url: `${this.ENDPOINT}AccountExists`,
                    data: JSON.stringify(accountViewModel),
                    method: METHOD.POST,
                    headers: this.headers as AxiosHeaders
               })
                    .then(res => res.data)
                    .catch(err => {
                         const error = new CustomError({ message: err.toString(), name: 'API Error' });
                         throw error.throwCustomError()
                    })
          )
     }

     public async Register(registerViewModel: RegisterViewModel): Promise<string> {
          return Promise.resolve(
               axios({
                    url: `${this.ENDPOINT}register`,
                    data: JSON.stringify(registerViewModel),
                    method: METHOD.POST,
                    headers: this.headers as AxiosHeaders
               })
                    .then(res => res.data)
                    .catch(err => {
                         const error = new CustomError({ message: err.toString(), name: 'API Error' });
                         throw error.throwCustomError()
                    })
          )
     }

     public async RefreshToken(tokenResult: TokenResult): Promise<string> {
          return Promise.resolve(
               axios({
                    url: `${this.ENDPOINT}refresh`,
                    data: JSON.stringify(tokenResult),
                    method: METHOD.POST,
                    headers: this.headers as AxiosHeaders
               })
                    .then(res => res.data)
                    .catch(err => {
                         const error = new CustomError({ message: err.toString(), name: 'API Error' });
                         throw error.throwCustomError()
                    })
          )
     }
}