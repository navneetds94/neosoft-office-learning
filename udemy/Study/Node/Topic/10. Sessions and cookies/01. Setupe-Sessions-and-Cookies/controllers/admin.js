const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  console.log('request id is => ',req.user);
  const user = req.user.id;
  Product.create({
    title: title,
    price: price,
    img: imageUrl,
    desc: description,
    userId: user
  }).then(result => {
    console.log('product Added Succesfully');
    res.redirect('/');
  }).catch(err=> {console.log(err)})
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId).then(
    product => {
      if (!product) {
        return res.redirect('/');
      }
      else{
        res.render('admin/edit-product', {
          product: product,
          pageTitle: 'Edit Product',
          path: '/admin/edit-product',
          editing: editMode,
        });
      }
    }
  )
  .catch(err=> {console.log(err)});
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
  .then(
    product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.img = updatedImageUrl;
      product.desc = updatedDesc;
      return product.save()
    }
  )
  .then(results => {
    console.log('Updated Product');
    res.redirect('/admin/products');
  })
  .catch(err=> console.log(err))
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(
    results => {
      res.render('admin/products', {
        prods: results,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      })
    }
  )
  .catch(err => {console.log(err)})
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  // Product.deleteById(prodId);
  Product.findByPk(prodId)
  .then(product => {
    product.destroy()
  })
  .then(result => {
    console.log('DELETE PRODUCT SUCCESSFULLY');
    res.redirect('/admin/products');
  })
  .catch(err=> console.log(err))
};
