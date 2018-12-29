import showPosts from './components/showPosts'
import listPosts from './components/listPosts'
import HelloWorld from './components/HelloWorld'
import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'listPosts',
      component: listPosts
    },
    {
      path: '/posts',
      name: 'showPosts',
      component: showPosts
    },
  ]
})