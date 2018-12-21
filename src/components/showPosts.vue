<template>
    <div id="show-posts">
        <h1>All Articles</h1>
        <div v-for="post in posts" class="single-post">
            <h2>{{post.title}}</h2>
            <article>{{ post.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: {}
        }
    },
    methods: {

    },
    created: function() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
            this.posts = response.data.slice(0,10);
        });
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


