<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <show-posts/>
    <list-posts/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import showPosts from './components/showPosts'
import listPosts from './components/listPosts'

export default {
  name: 'App',
  components: {
    HelloWorld, showPosts, listPosts
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
