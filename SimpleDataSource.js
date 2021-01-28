"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Iphone X", 2500), new Product_1.Product(2, "Iphone 10", 1800), new Product_1.Product(3, "Samsung Note9", 1200), new Product_1.Product(4, "Samsung s5", 650), new Product_1.Product(5, "Samsung S", 2100), new Product_1.Product(6, "Samsung X", 950));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
