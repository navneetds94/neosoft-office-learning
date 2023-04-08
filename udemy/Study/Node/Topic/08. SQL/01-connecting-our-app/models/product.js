const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.img = imageUrl;
    this.des = description;
    this.price = price;
  }

  save() {
    return db.execute(`insert into products(title,img,des,price) values(?,?,?,?)`,[this.title,this.img,this.des,this.price]);
  }

  static deleteById(id) {
    return db.execute(`delete from products where id = ${id}`)
  }

  static fetchAll() {
    return db.execute('select * from products');
  }

  static findById(id) {
    return db.execute(`select * from products where id = ${id}`)
  }
};
