<template lang="html">
    <div class=".admin-post-page">
        <section class='update-form'>
            <admin-post-form :post='loadedPost'/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm.vue';

export default {
  layout: 'admin',
  data(){
    return{
      loadedPost:{
        author:"Stefan",
        title:"My awesome post",
        thumbnailLink:"https://dummyimage.com/600x400/bed455/0011ff.jpg",
        content:"Super duper post",
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
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
