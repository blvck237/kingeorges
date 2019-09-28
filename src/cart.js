import { db } from "./main.js";
import Vue from "vue";

export const Cart = new Vue({
  data() {
    return {
      cart: []
    };
  },
  computed: {
    totalCost() {
      return this.cart.reduce((accum, product) => {
        return accum + product.details.price * product.quantity;
      }, 0);
    }
  },
  methods: {
    getProducts() {
      var productList = [];
      db.collection("products")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(product => {
            productList.push(product.data());
          });
        });
      return productList;
    },
    addToCart(product) {
      const locationInCart = this.cart.findIndex(p => {
        return p.details.sku === product.sku;
      });
      if (locationInCart === -1) {
        this.cart.push({
          details: product,
          quantity: 1
        });
      } else {
        this.cart[locationInCart].quantity++;
      }
    },
    removeFromCart(sku) {
      const locationInCart = this.cart.findIndex(p => {
        return p.details.sku === sku;
      });
      if (this.cart[locationInCart].quantity <= 1) {
        this.cart.splice(locationInCart, 1);
      } else {
        this.cart[locationInCart].quantity--;
      }
    }
  }
});
