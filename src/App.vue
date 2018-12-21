<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <show-posts/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import showPosts from './components/showPosts'

export default {
  name: 'App',
  components: {
    HelloWorld, showPosts
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
  margin-top: 60px;
}
</style>
