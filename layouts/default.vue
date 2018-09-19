<template>
  <div>
     <TheHeader @sidenavToggle="displaySideNav = !displaySideNav"/>
     <TheSidenav
      :show = 'displaySideNav'
      @close = 'displaySideNav = false'
     />
    <nuxt/>
  </div>
</template>
<script>
import TheHeader from '~/components/navigation/TheHeader.vue'
import TheSidenav from '@/components/navigation/TheSidenav.vue'

export default {
    data(){
        return{
            displaySideNav:false,
        }
    },
    components:{
        TheHeader,
        TheSidenav
    },
    methods:{

    }
}
</script>
<style>
html{
    font-family: 'Open Sans', sans-serif;
}

body{
    margin: 0;
}
</style>
