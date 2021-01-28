import { Product } from "./Product";

export interface IProductService{
    getByIdProduct(Id:number):Product;
    getAllProduct():Array<Product>;
    saveProduct(product:Product):void;
    removeProduct(product : Product):void;
}