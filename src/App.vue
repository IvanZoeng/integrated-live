<template>
  <div id="app">
    <the-top-bar></the-top-bar>
    <router-view/>
  </div>
</template>

<script>
import TheTopBar from './page/TheTopBar';

export default {
  name: 'App',
  components: {
    'the-top-bar': TheTopBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
