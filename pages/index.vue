<template>
  <div class="home-page">
      <section class='intro'>
          <h1>Get Latest Tech News</h1>
      </section>
      <section class='featured-posts'>
          <post-list :posts='posts'/>
      </section>
  </div>
</template>

<script>
import PostList from '~/components/posts/PostList.vue';
export default {
    components:{
        PostList
    },
    asyncData(context, callback){
        console.log('hp asinc');
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
            } )
        }, 1500)
    },

    // data(){
    //     return{
    //         posts:[]
    //     }
    // }
}
</script>

<style lang="css" scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
