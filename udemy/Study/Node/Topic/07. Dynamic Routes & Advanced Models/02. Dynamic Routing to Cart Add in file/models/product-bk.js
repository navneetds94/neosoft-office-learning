const products = []
module.exports = class Product{
    constructor(title,url,price,description){
        this.title = title;
        this.imageUrl = url;
        this.price = price;
        this.description = description;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products
    }
}