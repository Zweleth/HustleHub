<template lang="">
  <div class="loader" v-if="siteLoading == true">
    <div class="loading" >
        <p>Loading...</p>
      <div class="spinner"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'; 
export default {
    computed: {
        ...mapGetters(["siteLoading"])
    }
};
</script>
<style scoped>
.loader {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 10;
  background-color: white;
  color: black;
}
.loading {
  width: fit-content;
  height: fit-content;
  background-color: white;
  display: grid;
  place-items: center;
  position: absolute;
  z-index: 6;
}
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4px solid white;
  border-radius: 50%;
  border-right-color: black;
  animation: spinner-a4dj62 1s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: spinner-a4dj62 2s infinite;
}

.spinner::after {
  margin: 8px;
  animation-duration: 3s;
}

@keyframes spinner-a4dj62 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
