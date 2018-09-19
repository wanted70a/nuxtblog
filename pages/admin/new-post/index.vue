<template lang="html">
  <div class="admin-new-post-page">
    <section class='new-post-form'>
      <form class="" @submit.prevent='onSave'>
        <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
        <AppControlInput v-model="editedPost.title">Title</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
        <AppControlInput
         control-type="textarea"
         v-model="editedPost.content">Content</AppControlInput>
       <AppButton type="submit">Save</AppButton>
       <AppButton
         type="button"
         style="margin-left: 10px"
         btn-style="cancel"
         @click="onCancel">Cancel</AppButton>
      </form>
    </section>
  </div>
</template>

<script>
import AppControlInput from '@/components/ui/AppControlInput.vue';
import AppButton from "@/components/ui/AppButton";

export default {
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
    AppButton,
    AppControlInput
  }
}

</script>

<style lang="css">
</style>
