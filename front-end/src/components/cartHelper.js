const addItem = (item, next) => {
  let cart = [];
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    cart.push({
      ...item, count: 1
    });

    cart = Array.from(new Set(cart.map(p => p._id))).map(id => {
      return cart.find(p => p._id === id);
  });

    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  }
}

const getCart = () => {
  if (typeof window !== 'undefined') {
      if (localStorage.getItem('cart')) {
          return JSON.parse(localStorage.getItem('cart'));
      }
  }
  return [];
};

const getPrice = async () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      const cart = await JSON.parse(localStorage.getItem('cart'));
      let tprice = 0;
      cart.map(cart => {
        tprice += cart.price * cart.count;
      })
      return tprice;
    }
  }
  return [];
};

const removeItem = productId => {
  let cart = [];
  if (typeof window !== 'undefined') {
      if (localStorage.getItem('cart')) {
          cart = JSON.parse(localStorage.getItem('cart'));
      }

      cart.map((product, i) => {
          if (product._id === productId) {
              cart.splice(i, 1);
          }
      });

      localStorage.setItem('cart', JSON.stringify(cart));
  }
  return cart;
};

export { addItem, getCart, removeItem, getPrice }