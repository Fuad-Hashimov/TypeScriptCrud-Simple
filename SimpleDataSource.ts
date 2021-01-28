import { Product } from "./Product";

export class SimpleDataSource{
    private products : Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Iphone X",2500),
            new Product(2,"Iphone 10",1800),
            new Product(3,"Samsung Note9",1200),
            new Product(4,"Samsung s5",650),
            new Product(5,"Samsung S",2100),
            new Product(6,"Samsung X",950)
        )
    }

    getProducts():Array<Product>{
        return this.products;
    }
}