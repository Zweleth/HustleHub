<template lang="">
  <div class="page" id="mysites" v-if="L_C_I?.l_c_k != null">
    <ClientSites />
    <LoadingSites />
    <SingleSite />
  </div>
  <div class="page" @mouseover="mOver()" v-else></div>
</template>
<script>
import ClientSites from "@/components/ClientSites.vue";
import LoadingSites from "@/components/LoadingSites.vue";
import SingleSite from "@/components/SingleSite.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    ClientSites,
    LoadingSites,
    SingleSite
  },
  computed: {
    ...mapGetters(["L_C_I","sites"]),
  },
  methods: {
    ...mapActions(["fetchClientsSites","fetchSite"]),
    mOver() {
      window.location.reload();
    },
    ...mapMutations(["setSite"])
  },
  created() {
    this.fetchClientsSites();
    this.setSite(null)
  },
};
</script>
<style scoped>
</style>
