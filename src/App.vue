<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/list">List</router-link>
        <router-link :to="{name: 'showPosts'}">Posts</router-link>
    </div>

    <router-view></router-view>
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
