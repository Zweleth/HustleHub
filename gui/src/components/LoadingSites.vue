<template lang="">
  <div
    class="mysites"
    v-if="is_logged && clientNav?.show_sites == true && sites != null"
  >
    <div class="site" v-for="n in 10"></div>
  </div>
</template>
<script>
export default {};
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
    background-color: gray;
}
</style>
