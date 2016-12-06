import products from './products';
import taxons from './taxons';
import loader from './loader';
import order from './order';
import flash from './flash';
import countries from './countries';

export default {
  addProducts: products.addProducts,
  appendProducts: products.appendProducts,
  addProduct: products.addProduct,
  fetchProductsByTaxon: products.fetchProductsByTaxon,
  addTaxons: taxons.addTaxons,
  displayLoader: loader.displayLoader,
  hideLoader: loader.hideLoader,
  addProductToCart: order.addProductToCart,
  setFlash: flash.setFlash,
  showFlash: flash.showFlash,
  hideFlash: flash.hideFlash,
  addCountries: countries.addCountries
};
