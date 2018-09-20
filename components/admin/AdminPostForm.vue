<template lang="html">
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
</template>

<script>
import AppControlInput from "@/components/ui/AppControlInput";
import AppButton from "@/components/ui/AppButton";
export default {
  data(){
    return{
      editedPost: this.post
      ?{...this.post}
      :{
        author:"",
        title:"",
        thumbnailLink:"",
        content:"",
      }
    }
  },
  props:{
      post:{
          type:Object,
          required:false
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
