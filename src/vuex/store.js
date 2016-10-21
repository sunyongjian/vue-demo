import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/iphone7'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: { index }
})
