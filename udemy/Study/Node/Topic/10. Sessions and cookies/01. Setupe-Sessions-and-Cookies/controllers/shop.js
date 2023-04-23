const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};



exports.getIndex = (req, res, next) => {

  Product.findAll().then(results=> {
    res.render('shop/index', {
      prods: results,
      pageTitle: 'Shop',
      path: '/'
    });
  }).catch(err=> {console.log(err)})

};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;

  // first method
  Product.findByPk(prodId).then(
    prduct => {
      res.render('shop/product-detail', {
        product: prduct,
        pageTitle: 'product detail',
        path: '/products'
      });
    }
  )
  .catch(err=> {console.log(err)});

  // second method
  // Product.findAll({where:{id:prodId}}).then(
  //   ([rows,filecontent]) => {
  //     res.render('shop/product-detail', {
  //       product: rows,
  //       pageTitle: 'product detail',
  //       path: '/products'
  //     });
  //   }
  // )
  // .catch(err=> {console.log(err)});
};

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};