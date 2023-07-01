<template lang="">
  <div class="mysites" v-if="is_logged && sites && show_sites == true">
    <div class="site" v-for="site in sites" :key="site">
      <div class="icon">
        <i
          class="fa-solid fa-shop"
          v-if="
            site.site_type == 'e-commerce' || site.site_type == 'E-commerce'
          "
        ></i>
        <i
          class="fa-solid fa-briefcase"
          v-if="site.site_type == 'Business'"
        ></i>
        <i class="fa-solid fa-comments" v-if="site.site_type == 'Blog'"></i>
        <i
          class="fa-solid fa-calendar-check"
          v-if="site.site_type == 'Event'"
        ></i>
        <i class="fa-solid fa-id-card" v-if="site.site_type == 'Portfolio'"></i>
      </div>
      <div class="info">
        <h6 class="name">{{ site.site_name }}</h6>
        <h6 class="description">{{ site.site_description }}</h6>
        <h6 class="type">{{ site.site_type }}</h6>
        <h6 class="status">{{ site.status_name }}</h6>
        <button @click.prevent="showMore(site.site_id)">View more</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["sites","loggedClient","is_logged","show_sites"]),
  },
  methods: {
    ...mapActions(["fetchClientsSites"]),
  },
  created() {
    this.fetchClientsSites(this.loggedClient.client_id)
  },
};
</script>
<style scoped>
.mysites {
  width: 100vw;
  height: 80vh;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 2rem;
}

.site {
  width: 30rem;
  height: 12rem;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  border: 0.15rem solid black;
}

.icon {
  display: grid;
  place-items: center;
  width: 10rem;
  height: 90%;
  border-right: 0.1rem solid black;
}

.icon i {
  scale: 5;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: left;
  text-align: left;
  padding: 1.5rem 0.5rem;
  color: black;
}

.info button {
  font-size: small;
  border: none;
  background: none;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
  margin-top: 1rem;
  color: black;
  padding: 0.1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}

.status {
  background-color: black;
  padding: 0.3rem 0.3rem;
  border-radius: 0.4rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: white;
}
.site h6 {
  color: black;
}
</style>
