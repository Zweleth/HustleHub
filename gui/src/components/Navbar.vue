<template lang="">
  <nav class="navbar navbar-expand-lg" v-if="!is_logged">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" v-if="logoLight == false"
        ><img
          src="https://i.postimg.cc/s28QzdNN/Hustle-Hub.png"
          alt=""
          v-if="this.is_logged?.status != true"
        />
        <h6 v-if="this.is_logged?.status != true">HustleHub</h6></a
      >
      <a class="navbar-brand light" href="#" v-if="logoLight == true"
        ><img
          src="https://i.postimg.cc/d3fWQXK0/Hustle-Hub-2.png"
          alt=""
          v-if="this.is_logged?.status != true"
        />
        <h6 v-if="this.is_logged?.status != true">HustleHub</h6></a
      >
      
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" v-if="this.is_logged?.status != true"
            >Home</router-link
          >
          <router-link to="/sites" v-if="this.is_logged?.status != true"
            >Services</router-link
          >
          <router-link to="/sign-in" v-if="this.is_logged?.status != true"
            >Sign in</router-link
          >
          <router-link to="/sign-up" v-if="this.is_logged?.status != true"
            >Sign up</router-link
          >
          <router-link to="/build" v-if="this.is_logged?.status != true"
            >Rates</router-link
          >
          <router-link to="/about" v-if="this.is_logged?.status != true"
            >About us</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["logoLight","is_logged"])
  },
  
};
</script>
<style scoped>
nav {
  position: absolute;
  width: 100vw;
  color: black;
  background-color: none;
  z-index: +5;
}
.navbar-nav {
  gap: 1.5rem;
  margin-left: auto;
  margin-right: 5rem;
}
.navbar-brand {
  display: flex;
  place-items: center;
  gap: 0.5rem;
}
.light {
  color: white;
}
.navbar-brand h6 {
  font-size: larger;
  color: black;
}

.navbar-brand h6 span {
  color: black;
}

.light h6{
  color: white;
}
.navbar-brand img {
  height: 3rem;
}
nav a {
  color: black;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: black;
}
</style>
