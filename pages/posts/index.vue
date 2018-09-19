<template lang="html">
  <div class="posts-page">
   <post-list/>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
export default {
    components:{
        PostList
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
