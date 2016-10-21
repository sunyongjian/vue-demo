<template lang="jade">
  div.Hello
    img.logo( src="../assets/logo.png" )
    h1 {{ msg }}
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Welcome to Apple Store'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1
  color: #42b983;
</style>
