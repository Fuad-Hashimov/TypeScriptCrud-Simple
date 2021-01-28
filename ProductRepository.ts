import { Product } from "./Product";
import { IProductService } from "./IProductService";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductRepository implements IProductService{

    private dataSource : SimpleDataSource;
    private products : Array<Product>;

    constructor(){
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p=> this.products.push(p));
    }

    getByIdProduct(Id: number): Product {
        return this.products.filter(p=>p.Id === Id)[0];
    }
    getAllProduct(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.Id === 0 || product.Id == null){
            product.Id = this.generateId();
            this.products.push(product);
        }
        else{
            let index;
            for(let i =0; i < this.products.length;i++){
                if(this.products[i].Id == product.Id){
                    index = i;
                }
            }
            this.products.splice(index,1,product);
        }
    }
    removeProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index > 0){
            this.products.splice(index,1);
        }
    }

    private generateId():number{
        let key = 1;
        while (this.getByIdProduct(key) != null) {
            key++;
        }
        return key;
    }
    
}