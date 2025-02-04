import { _Headers } from '../../utils/constants';

import users from '../db/users.json';
import products from '../db/products.json';
import multimediaFilesProduct from '../db/multimediaFilesProduct.json';

import { User } from '../../domain/entities/User';
import { MultimediaFilesProduct } from '../../domain/entities/MultimediaFilesProduct.d';
import { Products } from '../../domain/entities/Products.d';


export default class JSONDataService {

     constructor() { }

     public async Login(): Promise<User[]> {
          return users as unknown as User[];
     }

     public async GetProductList(): Promise<Products[]> {
          return products as unknown as Products[];
     }

     public async GetMultimediaFilesProductList(): Promise<MultimediaFilesProduct[]> {
          return multimediaFilesProduct as unknown as MultimediaFilesProduct[];
     }
}