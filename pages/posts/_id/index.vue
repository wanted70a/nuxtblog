<template lang="html">
  <div class="single-post-page">
      <section class='post'>
          <h1 class='post-title'>{{post.title}}</h1>
          <div class="post-details">
              <div class="post-detail">Last Update On {{post.updatedOn}} </div>
              <div class="post-detail">Written By {{post.author}}</div>
          </div>
          <p class='post-content'>{{ post.conent}}</p>
      </section>
      <section class='post-feedback'>
          <p>Let me know what you think about post. Mail me @ <a href='mailto:feedback@me.com'>feedback@me.com</a></p>
      </section>
  </div>
</template>

<script>
export default {
    asyncData(context, callback){
        console.log('single post asinc');
        setTimeout( ()=>{
            callback(null, {
                post:{
                    isAdmin:false,
                    id:"1",
                    thumbnail:"https://dummyimage.com/600x400/bed455/0011ff.jpg",
                    title:"Naslov Number One (ID:"+ context.params.id +")",
                    author:'Stefan Milic',
                    updatedOn:'24.9.2018.',
                    previewText:"Lorem Ipsum Dolores",
                    content:'Some dummy lorem ipsum text to be content of this blog post.'
                }
            })
        }, 1000)
    }
}
</script>

<style lang="css" scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
