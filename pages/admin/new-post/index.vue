<template lang="html">
  <div class="admin-new-post-page">
    <section class='new-post-form'>
        <admin-post-form/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm.vue';

export default {
  layout: 'admin',
  data(){
    return{
      editedPost:{
        author:"",
        title:"",
        thumbnailLink:"",
        content:"",
      }
    }
  },
  methods:{
    onSave(){
      //savePost
      console.log(this.editedPost);

    },
    onCancel(){
      //navigate Back
      this.$router.push('/admin')
    }
  },
  components:{
    AdminPostForm
  }
}
</script>

<style lang="css" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
