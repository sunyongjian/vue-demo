<template lang="html">
  <div class="nav">
    <a class="link" v-link="{path:'/index'}">home</a>
    <a class="link" v-link="{path:'/shop'}">shop</a>
    <a class="link" v-link="{path:'/cart'}" >card</a>
  </div>
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
