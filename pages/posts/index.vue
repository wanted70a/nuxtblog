<template lang="html">
  <div class="posts-page">
   <post-list :posts='posts'/>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue'
export default {
    components:{
        PostList
    },
    asyncData( context, callback ){
        return new Promise( (resolve, reject )=>{
            setTimeout( ()=>{
                callback(null, {
                    posts:[
                        {
                            isAdmin:false,
                            id:"1",
                            thumbnail:"https://dummyimage.com/600x400/bed455/0011ff.jpg",
                            title:"Naslov Number One",
                            previewText:"Lorem Ipsum Dolores",
                        },
                        {
                            isAdmin:false,
                            id:"2",
                            thumbnail:"https://dummyimage.com/600x400/bed455/0011ff.jpg",
                            title:"Naslov Number Two",
                            previewText:"Lorem Ipsum Dolores",
                        },
                        {
                            isAdmin:false,
                            id:"3",
                            thumbnail:"https://dummyimage.com/600x400/bed455/0011ff.jpg",
                            title:"Naslov Number Three",
                            previewText:"Lorem Ipsum Dolores",
                        }
                   ]
                })
            }, 1500)
        })
        .then( data=>{
            return {
                data
            }
        })
        .catch( (e)=>{ context.error(new Error())})
        console.log('asinc data posts');
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
