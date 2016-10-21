<template>
  <div id="app">
    <Nav1></Nav1>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav1 from './pages/Nav'
import store from './vuex/store'
export default {
    store,
    components: { Nav1 }
}
</script>

<style>
html {
  height: 100%;
}

body {

}

#app {
  position: relative;
  left: 50%;
  margin-left: -400px;
  margin-top: 100px;
  color: #2c3e50;
  max-width: 800px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
