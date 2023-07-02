<template lang="">
  <div v-if="site"
    class="offcanvas offcanvas-bottom"
    tabindex="-1"
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
  >
    <div class="offcanvas-header">
      
      <button 
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
      <div class="site">
      <h6 class="single_status">{{ site?.status_name }}</h6>
      <h6 class="site_name">{{ site?.site_name }}</h6>
      <h6 class="site_type">{{ site?.site_type }}</h6>
      <h6 class="site_type">{{ site?.site_description }}</h6>

      <div class="icon">
        <i class="fa-solid fa-pen-ruler" v-if="site?.status_id == 1"></i>
        <i class="fa-solid fa-pencil" v-if="site?.status_id == 2"></i>
      </div>
      <h6 class="description">{{ site?.status_description }}</h6>
      <div class="buttons">
        <button
          class="btn btn-re"
          v-if="site[0]?.status_id == 3 || site?.status_id == 6"
          @click.prevent="
            statusUpdate1(site?.site_id);
            fetchSite(site?.site_id);"
        >
          Re-visit
        </button>
        <button
          class="btn btn-apprv2"
          v-if="site?.status_id == 3 || site?.status_id == 6"
          @click.prevent="
            statusUpdateSkip(site?.site_id);
            sendStatusEmailSkip(site);
            fetchSite(site?.site_id);"
        >
          Approve
        </button>
        <!-- <button class="btn btn-apprv">Approve</button> -->
      </div>
    </div>
    </div>
    <div class="offcanvas-body small">...</div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["site","sites"]),
  },
  methods: {
    ...mapMutations(["setSite"])
  },
  created() {
    
  },
};
</script>
<style scoped>
.offcanvas {
    width: 65vw;
    height: 90vh;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem 1rem 0 0;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
}
.btn-close{
    position: absolute;
    top: 1rem;
    right: 1rem;
}

.s_site {
  width: 80vw;
  height: 90vh;
  margin-top: auto;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 1rem 1rem 0 0;
  position: relative;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.single_status {
  background-color: black;
  padding: 0.3rem 0.3rem;
  border-radius: 0 0 0.4rem 0.4rem;
  position: absolute;
  top: 0;
  right: 4rem;
  color: white;
  width: fit-content;
}

.site_name {
  font-size: xx-large;
}
.site_name span{
 font-size: small;
 margin-bottom: auto;
}
.icon {
  position: relative;
  margin-top: 5rem;
}
.icon i {
  font-size: 10rem;
}

.description {
  margin-top: 3rem;
  font-size: large;
}
</style>
