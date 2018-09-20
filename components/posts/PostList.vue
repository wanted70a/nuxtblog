<template lang="html">
    <section class='posts-list'>
        <post-preview
        :isAdmin='isAdmin'
        key='1'
        id="1"
        thumbnail="https://dummyimage.com/600x400/bed455/0011ff.jpg"
        title="Post Title"
        previewText="Lorem Ipsum dolore is dummy text to replace real data">
        </post-preview>
        <post-preview
        :isAdmin='isAdmin'
        key='2'
        id="2"
        thumbnail="https://dummyimage.com/600x400/f041be/0011ff.jpg"
        title="I am new post"
        previewText="Lorem Ipsum dolore is dummy text to replace real data">
        </post-preview>
        <post-preview
        :isAdmin='isAdmin'
        key='3'
        id="3"
        thumbnail="https://dummyimage.com/600x400/111333/0011ff.jpg"
        title="Go Nuxt"
        previewText="Lorem Ipsum dolore is to replace real data">
        </post-preview>
        <post-preview
        :isAdmin='isAdmin'
        key='4'
        id="4"
        thumbnail="https://dummyimage.com/600x400/111333/0011ff.jpg"
        title="No way, Vue 4 life"
        previewText="Lorem Ipsum dolore is ue and the only">
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
