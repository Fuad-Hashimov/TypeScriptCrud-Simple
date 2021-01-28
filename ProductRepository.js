"use strict";
exports.__esModule = true;
exports.ProductRepository = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductRepository.prototype.getByIdProduct = function (Id) {
        return this.products.filter(function (p) { return p.Id === Id; })[0];
    };
    ProductRepository.prototype.getAllProduct = function () {
        return this.products;
    };
    ProductRepository.prototype.saveProduct = function (product) {
        if (product.Id === 0 || product.Id == null) {
            product.Id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].Id == product.Id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductRepository.prototype.removeProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductRepository.prototype.generateId = function () {
        var key = 1;
        while (this.getByIdProduct(key) != null) {
            key++;
        }
        return key;
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
