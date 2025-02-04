import { Products } from "../../domain/entities/Products.d"

interface ProductsViewModel extends Products {
     secureUrl: string
     images: string[]
}

export default ProductsViewModel