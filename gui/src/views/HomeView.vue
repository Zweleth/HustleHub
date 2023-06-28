<template>
  <div class="page" id="home">
    <div class="intro">
      <h2>Host your hustle</h2>
      <p>
        Boost your local business's growth with a powerful online presence by
        building a professional website
        <br />
        Go on take the first step towards building your website with us.
      </p>
      <router-link to="/sign-in"
        ><button>
          <div class="bg">Build</div>
          Build
        </button></router-link
      >
    </div>
    <img
      class="big-img"
      src="https://i.postimg.cc/q7GvFSC9/Group-5.png"
      alt=""
    />
    <img
      class="ani-1"
      src="https://i.postimg.cc/Z50cM6nY/icons8-code.gif"
      alt=""
    />
    <img
      class="ani-2"
      src="https://i.postimg.cc/VkTRQ50q/icons8-globe.gif"
      alt=""
    />
    <img
      class="ani-3"
      src="https://i.postimg.cc/rFfjjf8Y/icons8-buy.gif"
      alt=""
    />
    <img
      class="ani-4"
      src="https://i.postimg.cc/bNyL17jt/icons8-typing.gif"
      alt=""
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapMutations } from "vuex";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapMutations(["setLogoLight"]),
  },
  created() {
    this.setLogoLight(false);
  },
};
</script>
<style scoped>
.intro {
  text-align: left;
  margin-left: 5rem;
  color: black;
}

.intro h2 {
  font-size: xxx-large;
}
.intro p {
  font-size: large;
}
.intro button {
  padding: 0.2rem 1.2rem;
  font-size: x-large;
  border-radius: 2rem;
}
.bg {
  border-radius: 1.8rem;
}

.big-img {
  position: absolute;
  width: 62vw;
  right: 5vw;
  top: 4rem;
}

img {
  position: absolute;
}
.ani-1 {
  bottom: 6rem;
  right: 28rem;
  rotate: 20deg;
}
.ani-2 {
  bottom: 9rem;
  left: 18rem;
  rotate: 40deg;
}
.ani-3 {
  bottom: 25rem;
  right: 28rem;
  rotate: 40deg;
  width: 2rem;
}

.ani-4 {
  top: 7rem;
  right: 28rem;
  rotate: -40deg;
  width: 3rem;
}

@keyframes expandBg {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
