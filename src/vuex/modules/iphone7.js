const state = {
    type: 'ip7',
    color: '黑色',
    memory: '32G',
    price: '5388',
    imgUrl: 'static/ip7black.jpg',
    cart: []
}
const mutations = {
    CHANGE_TYPE (state, type) {
        state.type = type
    },
    CHANGE_COLOR (state, color, imgUrl) {
        state.color = color
        state.imgUrl = imgUrl
    },
    CHANGE_MEMORY (state, memory, price) {
        state.memory = memory
        state.price = price
    },
    ADD_ITEM (state) {
        var item = {
            type: state.type,
            color: state.color,
            price: state.price,
            memory: state.memory
        }
        state.cart.push(item)
    },
    REMOVE_ITEM (state, index) {
        state.cart.splice(index, 1)
    }
}
export default {
    state,
    mutations
}
