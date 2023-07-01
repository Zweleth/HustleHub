<template lang="">
  <div class="page" id="client">
    <button
    class="btn btn-primary btn-menu"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  ><i class="fa-solid fa-bars"></i>
  </button>
    <Sidebar />
    <ClientSites />
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import ClientSites from "@/components/ClientSites.vue";
export default {
  components: {
    ClientSites,
    Sidebar,
  },
};
</script>
<style scoped>
.btn-primary, .btn-primary:active  {
  position: absolute;
  top: 0.2rem;
  left: o.1rem;
  background: none;
  color: black;
  border: none

}
.btn-primary i{
  font-size: x-large;
}
</style>
