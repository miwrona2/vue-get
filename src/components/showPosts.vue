<template>
    <div id="show-posts">
        <h1>All Articles</h1>
        <input type="text" v-model="searchPhrase" placeholder="Search posts...">
        <div v-for="post in filterPosts" class="single-post" :key="post.id">
            <h2>{{post.title | capitalize}}</h2>
            <article>{{ post.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            searchPhrase: ''
        }
    },
    methods: {

    },
    created: function() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
            this.posts = response.data.slice(0,10);
        });
    },
    computed: {
        filterPosts: function(){
            return this.posts.filter((post) => {
                return post.title.match(this.searchPhrase);
            })
        }
    }
}
</script>

<style scoped>
#show-post {
  max-width: 800px;
  margin: 0 auto;  
}
.single-post {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eeeeee;
}
</style>


