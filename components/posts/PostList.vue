<template lang="html">
    <section class='posts-list'>
        <post-preview
        v-for='post in posts'
        :key='post.id'
        :isAdmin='post.isAdmin'
        :id="post.id"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText">
        </post-preview>
    </section>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'
export default {
    components:{
        PostPreview
    },
    props:{
        isAdmin:{
            type:Boolean,
            default:false
        },
        posts:{
            type:Array,
            required:true
        }
    }
}
</script>

<style lang="css" scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
