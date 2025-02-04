import JSONDataService from "../../data/services/JSONDataService";
import { CustomError } from "../../domain/entities/CustomError";
import { Products } from "../../domain/entities/Products.d";

export class ProductsController {

     service: JSONDataService;

     constructor() {
          this.service = new JSONDataService();
     }

     public async GetProductList(): Promise<Products[]> {
          try {
               const response = await this.service.GetProductList();
               return response
          } catch (err) {
               throw err as CustomError
          }
     }
}