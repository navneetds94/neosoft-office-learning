const product = []
module.exports = class Produc{
    constructor(title,category,price,img,desc){
        this.title = title;
        this.cat = category
        this.price = price
        this.image = img
        this.desc = desc
    }

    save(){
        console.log(this);
        product.push(this)
    }

    static productFetch(){
        return product
    }
}