<template lang="html">
  <div class="admin-page">
      <section class='new-post'>
          <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
      </section>
      <section class='exisitng-posts'>
          <h1>Existing Posts</h1>
          <post-list :isAdmin='true'/>
      </section>
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue';
import AppButton from '@/components/ui/AppButton.vue'
export default {
    layout: 'admin',
    components:{
        PostList,
        AppButton
    }
}
</script>

<style lang="css" scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
