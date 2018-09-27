import Vuex from 'vuex';
import Vue  from 'vue';

const createStore = () => {
    return new Vuex.Store({
        state:{
            posts:[]
        },
        mutations:{
            setPosts(state, posts){
                state.posts = posts;
            }
        },
        actions:{
            setPosts( vuexContext, posts ){
                vuexContext.commit('setPosts', posts);
            },
            nuxtServerInit(vuexContext, context){
                if( context.store.state.posts.length > 0 ){ return null}
                return new Promise( (resolve, reject )=>{
                    setTimeout( ()=>{
                        vuexContext.commit('setPosts',
                            [
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
                           ]);
                        resolve();
                    }, 1500)
                })
            }
        },
        getters:{
            posts(state){
                return state.posts;
            }
        }
    })
}

export default createStore;
