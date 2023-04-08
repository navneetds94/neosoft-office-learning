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

module.exports = class Product{
    constructor(id,title,category,price,img,desc){
        id = Math.random()
        id = parseInt(id * 100)
        this.id = id;
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

    static findById(id,callback){
        const prodID = parseInt(id)
        getProductsFromFile(product=> {
            for(let i in product){
                const findId = product[i].id
                if (findId === prodID){
                    const singleProduct = product[i];
                    callback(singleProduct);
                    break;
                }
            }
        });

    }
}