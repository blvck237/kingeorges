import Vue from 'vue';
import Vuex from 'vuex';

import * as _ from 'lodash';
import createPersistedState from 'vuex-persistedstate';

import { db } from '@/main';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //data
        products: [],
        carouselImages: [],
        cart: [],
        checkoutStatus: null,
    },
    plugins: [createPersistedState()],
    getters: {
        cartProducts(state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(product => product.id === cartItem.id);
                console.log('TCL: getCart -> product', product)
                return {
                    name: product.name,
                    src: product.src,
                    id: product.id,
                    model: product.model,
                    quantity: cartItem.quantity,
                }
            })
        }
    },

    actions: {
        getProducts(context) {
            var productList = [];
            db.collection("products").get().then((querySnapshot) => {
                querySnapshot.forEach((product) => {
                    productList.push(product.data());
                });
                context.commit('setProducts', productList);
            });
        },
        getCarouselImages(context) {
            var carouselImages = [];
            db.collection("banner").get().then((querySnapshot) => {
                querySnapshot.forEach((carouselImage) => {
                    carouselImages.push(carouselImage.data());
                });
                context.commit('setCarouselImages', carouselImages);
            });
        },
        addToCart(context, product) {
            const cartItem = context.state.cart.find(item => item.id === product.id)
            if (!cartItem) {
                context.commit('pushToCart', product.id);
            } else {
                context.commit('incrementItemQuantity', cartItem);
            }
        },
        increaseItem(context, product) {
            const cartItem = context.state.cart.find(item => item.id === product.id)
            if (cartItem)
                context.commit('incrementItemQuantity', cartItem);
        },
        decreaseItem(context, product) {
            const cartItem = context.state.cart.find(item => item.id === product.id)
            if (cartItem.quantity > 1)
                context.commit('decrementItemQuantity', cartItem);
            else
                context.commit('removeFromCart', cartItem);
        },
        checkOut(context, customer) {
            db.collection('proforma').doc().set({
                name: customer.name,
                type: customer.type,
                email: customer.email,
                cart: context.state.cart,
            }).then(success => {
                context.commit('emptyCart')
                context.commit('setCheckoutStatus', 'success')
            }).catch(error => {
                context.commit('setCheckoutStatus', 'error')
            })

        }
    },

    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        setCarouselImages(state, carouselImages) {
            state.carouselImages = carouselImages;
        },
        pushToCart(state, product) {
            state.cart.push({
                id: product,
                quantity: 1
            });
        },
        removeFromCart(state, cartItem) {
            state.cart = _.remove(state.cart, function (o) {
                return o.id != cartItem.id
            })
            console.log('TCL: removeFromCart -> state.cartProducts', state.cartProducts)
        },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++;
        },
        decrementItemQuantity(state, cartItem) {
            cartItem.quantity--;
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        },
        emptyCart(state) {
            state.cart = []
        }

    }
});