<template lang="jade">
  div.container
    img(:src="getState.imgUrl")
    ul
      li.text 颜色
      li(v-for="item in colors", :class="{active: item.name == getState.color}", @click="changeColor(item.name,colors[$index].imgUrl)") {{item.name}}
    ul
      li.text 内存
      li(v-for="item in prices", :class="{active: item.name === getState.memory}", @click="changeMemory(item.name, prices[$index].price)") {{item.name}}
    ul
      li.text 价格
      li.text.price {{getState.price}}
    button(@click="addItemx(item)") 添加到购物车
    div.msg(v-if="block") 添加成功
</template>

<script>
import {changeColor, changeMemory, addItem, changeType} from '../../vuex/actions'
export default {
  data () {
    return {
      imgUrl: 'static/ip7black.jpg',
      price: '5388-6888',
      color1: '黑色',
      block: false,
      colors: [
        {
          name: '黑色',
          imgUrl: 'static/ip7black.jpg'
        },
        {
          name: '白色',
          imgUrl: 'static/ip7white.jpg'
        },
        {
          name: '土豪金',
          imgUrl: 'static/ip7gold.jpg'
        },
        {
          name: '玫瑰金',
          imgUrl: 'static/ip7redgold.jpg'
        }
      ],
      prices: [
        {
          name: '32G',
          price: '5388'
        },
        {
          name: '128G',
          price: '6188'
        },
        {
          name: '256G',
          price: '6888'
        }
      ],
      item: {
        imgUrl: this.imgUrl,
        price: this.price,
        color: this.color1
      }
    }
  },
  vuex: {
    getters: {
      getState: (state) =>
        state.index
    },
    actions: {
      changeColor,
      changeMemory,
      changeType,
      addItemx (item) {
        var self = this
        self.block = true
        addItem(item)
        setTimeout(function () {
          self.block = false
        }, 1000)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  overflow: hidden
  position: relative
  img
    float: left
  ul
    float: left
    width: 300px
    &:after
     content:''
     clear: both
     display: block
    li
      cursor: pointer
      &.text
        border: none
      list-style: none
      float: left
      border: 1px solid #ccc
      padding: 5px
      margin-right: 5px
      &.active
        border: 2px solid #42b983
      &.price
        color: red
  button
    cursor: pointer
    margin-top: 20px
    background: #42b983
    padding: 10px
    border: 1px solid green
    color: #fff
    font-size: 14px
    outline: none
    &:hover
      background: rgb(66, 185, 163)
  .msg
    position: absolute
    width: 100px
    height: 40px
    top: 50%
    left: 50%
    margin: -20px 0 0 -60px
    line-height: 40px
    background: rgba(0,0,0,.8)
    color: #fff

</style>
