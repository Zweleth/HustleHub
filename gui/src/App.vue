<template>
  
  <navbar/>
  <Sidebar/>
  <router-view/>
  <loader/>
  
</template>
<script>
import navbar from '@/components/Navbar.vue'
import loader from '@/components/SiteLoader.vue'
import Sidebar from './components/Sidebar.vue';



export default {
  components: {
    navbar,
    loader,
    Sidebar
  }
}
</script>
<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}






</style>
