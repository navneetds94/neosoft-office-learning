// const products = []
const path = require('path');
const fs = require('fs');
const baseUrl = require('../util/path');

const json_file = path.join(path.join(baseUrl,'data','products.json'));

const getProductsFromFile = (cb) =>{
    fs.readFile(json_file,(err,fileContent)=>{
        if(err){
            cb([])
        }
        else{
            cb(JSON.parse(fileContent));
        }
    })
} 

module.exports = class Product{
    constructor(title,url,price,description){
        this.title = title;
        this.imageUrl = url;
        this.price = price;
        this.description = description;
    }

    save(){
        const submit_product_id = parseInt(Math.random() * 100);
        this.id = submit_product_id.toString();
        getProductsFromFile(products => {
            products.push(this);
            console.log(products);
            fs.writeFile(json_file,JSON.stringify(products),err => {
                console.log(err)
            })
        });
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

    static getSingleProduct(id,cb){
        getProductsFromFile(products => {
            // console.log(products);
            const product = products.find(json_file => json_file.id === id)
            cb(product);
        });
    }
}