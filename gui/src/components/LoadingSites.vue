<template lang="">
  <div
    class="mysites" v-if="sites == null && clientNav?.show_sites == true"
   
  >
    <div class="site" v-for="n in 10"><div class="shine"></div></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["sites","contentLoading","clientNav"])
    }
};
</script>
<style scoped>
.mysites {
  width: 100vw;
  height: 80vh;
  padding: 0;
  color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  column-gap: 1rem;
  padding: 2rem;
  background-color: white;
}
.site {
  margin: 0;
  width: 30rem;
  height: 12rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  position: relative;
  
}

.shine {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0) , rgba(255, 255, 255, 0.515), rgba(0, 0, 0, 0));
    width: 2rem;
    height: 100%;
    transform: skew(40deg);
    position: absolute;
    left: -6rem;
    animation: shine 1.5s ease-in-out infinite;
}

@keyframes shine {
    0% {
        transform: translateX(0) skew(40deg);
        width: 1rem;
    }
    25%{
        width: 2rem;
    }
    
    50% {
        width: 10rem;
    }
    75%{
        width: 2rem;
    }
    100% {
        transform: translateX(45rem) skew(40deg);
        width: 1rem;
    }
}
</style>
