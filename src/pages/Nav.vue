<template lang="jade">
  div.nav
    a.link(v-link="{path:'/index'}") 主页
    a.link(v-link="{path:'/shop'}") 商品
    a.link(v-link="{path:'/cart'}") 购物车
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
.nav
  margin-bottom: 50px
  display: flex
  justify-content: center
  a
    width: 100px
    color: #fff
    text-decoration: none
    background: #42b983
    padding: 5px 10px
    &.v-link-active
      background: #eee
      color: #42b983

</style>
