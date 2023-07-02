<template lang="">
  <button  v-if="L_C_I?.l_c_k != null"
    class="btn1"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  ><i class="fa-solid fa-bars"></i>
  </button>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="client_info">
        <i class="fa-solid fa-user"></i>
        <h6>{{ loggedClient?.first_name }} {{ loggedClient?.last_name }}</h6>
      </div>
      <div class="buttons">
        <button><router-link to="/mysites"><img src="https://i.postimg.cc/tTxgGVBw/icons8-websites-64.png" alt=""> My sites</router-link></button>
        <button><router-link to="/myprofile"><i class="fa-solid fa-user"></i> My profile</router-link> </button>
        <button><router-link to="/build"><img src="https://i.postimg.cc/B6QCh4Nj/icons8-add-properties-60.png" alt=""> Create site</router-link> </button>
      </div>
      <button class="btn_signOut"><i class="fa-solid fa-right-from-bracket" @click.prevent="signOut()"></i> Sign out</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedClient","L_C_I"]),
  },
  methods: {
    ...mapActions(["signOut"]),
    goToProf() {
        let clientNav = {
          show_sites : false,
          show_single_site : false,
          show_profile: true
        }
        sessionStorage.setItem("clientNav", JSON.stringify(clientNav))
        
    },
    goToMySites() {
        let clientNav = {
          show_sites : true,
          show_single_site : false,
          show_profile: false
        }
        sessionStorage.setItem("clientNav", JSON.stringify(clientNav))
       
    }
  }
};
</script>
<style scoped>
.btn1, .btn1:active, .btn1:hover, .btn1:focus  {
  position: absolute;
  top: 0.2rem;
  left: 0.5rem;
  background: none;
  color: black;
  border: none;
  z-index: 8;

}
.btn1 i{
  font-size: x-large;
}
.offcanvas {
  color: black;
}

.offcanvas-body {
  position: relative;
}

.client_info {
  border: none;
  border-bottom: 0.1rem solid black;
  padding-bottom: 2rem;
}
.client_info i {
  font-size: 8rem;
  margin-bottom: 1rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-right: 1rem;
  margin-top: 2rem;
  gap: 0.5rem;
  display: grid;
  place-items: center;
}

.buttons button {
  width: fit-content;
  margin: 0;
  margin-left: auto;
  border: none;
}

.buttons button img {
    height: 1rem;
}



.btn_signOut {
  position: absolute;
  border: none;
  bottom: 1rem;
  left: 3rem;
}
</style>
