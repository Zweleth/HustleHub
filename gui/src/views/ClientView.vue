<template lang="">
  <div class="page" id="client">
    
    <Sidebar />
    <ClientSites />
    <LoadingSites/>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import ClientSites from "@/components/ClientSites.vue";
import LoadingSites from "@/components/LoadingSites.vue";
export default {
  components: {
    ClientSites,
    Sidebar,
    LoadingSites
  },
};
</script>
<style scoped>

</style>
