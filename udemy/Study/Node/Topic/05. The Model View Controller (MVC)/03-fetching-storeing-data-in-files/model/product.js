const fs = require('fs');
const path = require('path');
const baseURL =require('../util/path');

module.exports = class Produc{
    constructor(title,category,price,img,desc){
        this.title = title;
        this.cat = category
        this.price = price
        this.image = img
        this.desc = desc
    }

    save(){
        const p = path.join(baseURL,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            let products = [];
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{console.log(err)})
        })
    }

    static productFetch(callback){
        const p = path.join(baseURL,'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                callback([]);
            }
            callback(JSON.parse(fileContent));
        })
    }
}