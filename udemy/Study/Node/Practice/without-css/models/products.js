const path = require('path');
const file = require('fs');
const baseUrl = require('../util/path');

const json_file = path.join(baseUrl,'data','products.json');

const getProductsFromFile = (cb)=>{
    file.readFile(json_file,(err,fileContent)=>{
        if(err){
            cb([]);
            console.log(err);
        }
        else{
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product{
    constructor(id,title,img,price,desc){
        this.id = id;
        this.name = title;
        this.image = img;
        this.price = price;
        this.description= desc;
    }

    save(){
        getProductsFromFile(products => {
            if(this.id){
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProduct = [...products];
                updatedProduct[existingProductIndex] = this;
                fs.writeFile(json_file,JSON.stringify(updatedProduct),err => {
                    console.log(err)
                })
            }
            else{
                const submit_product_id = parseInt(Math.random() * 100);
                    this.id = submit_product_id.toString();
                    products.push(this)
                    //console.log(products);
                    file.writeFile(json_file,JSON.stringify(products),err=>{
                        console.log(err)
                    })
            }
        })
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }

    static getSingleProduct(id,cb){
        getProductsFromFile(products=>{
            const product = products.find(json_file => json_file.id === id)
            cb(product);
        })
    }
}