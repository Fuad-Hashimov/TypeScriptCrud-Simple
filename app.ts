import { Product } from "./Product";
import { ProductRepository } from "./ProductRepository";

let productRepository = new ProductRepository();

let result : any;

result = productRepository.getByIdProduct(2);

let pro = new Product();
pro.Name = "Test";
pro.Price = 3500;


let p = new Product();
p.Id = 5;
p.Name = "Update";
p.Price = 50;

productRepository.saveProduct(p);

//productRepository.removeProduct(result);

result = productRepository.getAllProduct();
console.log(result);

