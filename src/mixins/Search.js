export default {
        computed: {
            filterPosts: function(){
                return this.posts.filter((post) => {
                    return post.title.match(this.searchPhrase);
                })
            }
        }
}