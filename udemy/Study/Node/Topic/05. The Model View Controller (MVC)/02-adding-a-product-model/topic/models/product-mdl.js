const products = [];
module.exports = class Product{
    constructor(name,cat,img,price,desc){
        this.name = name
        this.category = cat
        this.image = img
        this.price = price
        this.desc = desc
    }

    save(){
        // console.log(this)
        products.push(this)
    }

    static fetchAll(){
        return products
    }
}