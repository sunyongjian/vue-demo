<template lang="jade">
    p(v-if="!getCart.length") 购物车空空如也

    table(v-if="getCart.length")
      thead
        tr
          th 颜色
          th 内存
          th 价格
          th 操作
      tbody
        tr 总计： {{totalPrice}}  元
        tr(v-for="item in getCart")
          td {{item.color}}
          td {{item.memory}}
          td {{item.price}}
          td.remove(@click="removeItem($index)") 删除
</template>

<script>
import {removeItem} from '../vuex/actions'
export default {
    computed: {
        'totalPrice': function () {
            let totalPrice = 0
            for (let i in this.getCart) {
                totalPrice += Number(this.getCart[i].price)
            }
            return totalPrice
        }
    },
    vuex: {
        getters: {
            getCart: (state) =>
                state.index.cart
        },
        actions: {
            removeItem
        }
    }
}
</script>

<style lang="stylus" scoped>
table
  widht: 600px
  margin-left: 100px
  th,td
    width: 140px
    text-align: center
    display: inline-block
    height: 30px
    line-height: 30px
    &.remove
      color: red
  tbody
    tr
      background: #eee

</style>
