const fs = require('fs');
const path = require('path');
const baseURL =require('../util/path');
const p = path.join(baseURL,'data','products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }
        else{
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Produc{
    constructor(title,category,price,img,desc){
        this.title = title;
        this.cat = category
        this.price = price
        this.image = img
        this.desc = desc
    }

    save(){
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{console.log(err)})
        })
    }

    static productFetch(callback){
        getProductsFromFile(callback);
    }
}