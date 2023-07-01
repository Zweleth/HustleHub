<template lang="">
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
        <button><img src="https://i.postimg.cc/tTxgGVBw/icons8-websites-64.png" alt=""> My sites</button>
        <button><i class="fa-solid fa-user"></i> My profile</button>
        <button><img src="https://i.postimg.cc/B6QCh4Nj/icons8-add-properties-60.png" alt=""> Create site</button>
      </div>
      <button class="btn_signOut"><i class="fa-solid fa-right-from-bracket" @click.prevent="signOut()"></i> Sign out</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedClient"]),
  },
  methods: {
    ...mapActions(["signOut"])
  }
};
</script>
<style scoped>
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
