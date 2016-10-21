import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routerMap from './router'
import vueResource from 'vue-resource'

Vue.use(Router)
Vue.use(vueResource)
const router = new Router()
routerMap(router)
router.redirect({
    '*': '/'
})
router.start(App, '#root')
