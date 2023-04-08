const fs = require('fs');
const path = require('path');
const baseUrl = require('../util/path');
const json_file = path.join(baseUrl,'data','cart.json');

module.exports = class Cart{
    static addProductToCart(id,price){
        // Fetch the previous cart
        let cart = { products: [], totalPrice: 0 };
        fs.readFile(json_file,(err,fileContent) => {
            if(!err){
                cart = JSON.parse(fileContent);
            }

            let existingProdInd = cart.products.findIndex(prod => prod.id === id);
            let existingProd = cart.products[existingProdInd];
            let updatedProduct
            if(existingProd){
                updatedProduct = {...existingProd}
                updatedProduct.qty += 1
                cart.products[existingProdInd] = updatedProduct;
            }
            else{
                updatedProduct = {id:id,qty:1}
                cart.products = [...cart.products , updatedProduct];
            }

            cart.totalPrice += parseInt(price);

            fs.writeFile(json_file, JSON.stringify(cart), err => {
                console.log(err);
              });
        })
    }
}