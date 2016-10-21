// src/router.js

import Home from './pages/home'
import Shop from './pages/shop'
import Cart from './pages/cart'

export default function (router) {
    router.map({
        '/': {
            component: Home
        },
        'index': {
            component: Home
        },
        'shop': {
            component: Shop
        },
        'cart': {
            component: Cart
        }
    })
}
