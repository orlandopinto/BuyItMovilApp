import JSONDataService from "../../data/services/JSONDataService";
import { CustomError } from "../../domain/entities/CustomError";
import { MultimediaFilesProduct } from "../../domain/entities/MultimediaFilesProduct.d";

export class MultimediaFilesProductController {

     service: JSONDataService;

     constructor() {
          this.service = new JSONDataService();
     }

     public async GetMultimediaFilesProductList(): Promise<MultimediaFilesProduct[]> {
          try {
               const response = await this.service.GetMultimediaFilesProductList();
               return response
          } catch (err) {
               throw err as CustomError
          }
     }
}