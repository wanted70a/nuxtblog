<template lang="html">
  <div class="posts-page">
   <PostList :posts='posts'/>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
export default {
    components:{
        PostList
    },
    computed:{
        posts(){
            return this.$store.getters.posts;
        }
    }
}
</script>

<style lang="css" scoped>
.posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
