<template>
  <navbar/>
  <router-view/>
  <loader/>
  
</template>
<script>
import navbar from '@/components/Navbar.vue'
import loader from '@/components/SiteLoader.vue'



export default {
  components: {
    navbar,
    loader
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}



</style>
