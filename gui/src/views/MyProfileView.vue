<template lang="">
  <div class="page" id="profile">
    <div class="left">
      <i class="fa-solid fa-user"></i>
      <h3>{{ loggedClient?.first_name }} {{ loggedClient?.last_name }}</h3>
      <h4>
        <span class="var">Email address :</span
        ><span class="val">{{ loggedClient?.email_add }}</span>
      </h4>
      <h4>
        <span class="var">Cell number :</span
        ><span class="val">{{ loggedClient?.cellphone }}</span>
      </h4>
      <h4>
        <span class="var">Number of sites :</span
        ><span class="val">{{ sites?.length }}</span>
      </h4>
    </div>
    <div class="right">
      <h3>My sites</h3>
      <router-link to="/mysites">
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
            <i
              class="fa-solid fa-id-card"
              v-if="site.site_type == 'Portfolio'"
            ></i>
          </div>
          <div class="info">
            <h6 class="name">{{ site.site_name }}</h6>
            <h6 class="description">{{ site.site_description }}</h6>
            <h6 class="type">{{ site.site_type }}</h6>
            <h6 class="status">{{ site.status_name }}</h6>
            <button>View more</button>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedClient", "sites"]),
  },
  methods: {
    ...mapActions(["fetchLoggedClient", "fetchClientsSites"]),
  },
  created() {
    this.fetchLoggedClient();
    this.fetchClientsSites();
  },
};
</script>
<style scoped>
.page {
  align-items: center;
  justify-content: center;
  color: black;
}

.client-info {
  width: 90vw;
  height: 90vh;
  color: white;
  display: flex;
  align-items: center;
}
.left {
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border: none;
  border-right: 0.1rem solid black;
  padding-right: 4rem;
}

.left h4 {
  width: 100%;
  position: relative;
  height: 2rem;
}

.var {
  position: absolute;
  left: 0;
}

.val {
  position: absolute;
  right: 0;
}



.right a {
  text-decoration: none;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.site {
  width: 15rem;
  height: 6rem;
  background-color: white;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  position: relative;
  border: 0.075rem solid black;
  color: black;
}

.icon {
  display: grid;
  place-items: center;
  width: 5rem;
  height: 90%;
  border-right: 0.06rem solid black;
}

.icon i {
  scale: 2.5;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  align-items: left;
  text-align: left;
  padding: 0.75rem 0.25rem;
  color: black;
  font-size: xx-small;
}

.info button {
  font-size: xx-small;
  border: none;
  background: none;
  border: 0.05rem solid black;
  border-radius: 0.15rem;
  margin-top: 0.5rem;
  color: black;
  padding: 0.05rem;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: xx-small;
}

.info {
  color: black;
  font-size: xx-small;
}

.info h6 {
  font-size: xx-small;
}
.status {
  background-color: black;
  padding: 0.15rem 0.15rem;
  border-radius: 0 0 0.2rem 0.2rem;
  position: absolute;
  top: 0;
  right: 0.25rem;
  color: white;
  font-size: xx-small;
}

.left > i {
  font-size: 8rem;
}
</style>
