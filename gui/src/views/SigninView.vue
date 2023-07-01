<template lang="">
  <div class="page" id="signin">
    <div class="left">
      <div class="signin_text">
        <h4>Sign up</h4>
        <p>
          Please sign in in order to get full access of the site's features and
          manage your account. If you don't already have an account sign up and
          create one
        </p>
      </div>
    </div>
    <div class="right">
      <form
        @submit.prevent="
          signIn(payload);
        "
      >
        <div class="user-icon">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            v-model="payload.email_add"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            v-model="payload.client_pass"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="buttons">
        <a href="">Forgot password</a>
          <p>
            Don't have an account?
            <router-link to="/sign-up">Signup</router-link>
          </p>
          <button type="submit" class="btnSign-in"> <div class="bg">Sign_in</div> Sign in</button>
          
        </div>
        <p class="error" v-if="message">{{message}}</p>
      </form>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      payload: {
        email_add: "",
        client_pass: "",
      },
      loading: false,
    };
  },
  computed:{
    ...mapGetters(["message"])
  }
  ,
  methods: {
    ...mapMutations(["setLogoLight"]),
    ...mapActions(["signIn"])
  },
  created() {
    this.setLogoLight(true);
  },
};
</script>
<style scoped>
.left {
  background-color: black;
  width: 50vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.right {
  background-color: white;
  width: 50vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.signin_text {
  color: white;
  margin: 0 4rem;
}
form {
  width: 25rem;
  height: 30rem;
  background: none;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: black;
}

.user-icon {
  height: 10rem;
  display: grid;
  place-items: center;
}

.user-icon i {
  scale: 6;
}

.form-floating {
  margin: 0 1rem;
}

.form-floating input:focus label,
.form-floating input:active label {
  background-color: none;
  box-shadow: none;
  color: black;
}

.form-floating input:hover,
.form-floating input:focus {
  outline: none;
  background: none;
  border-color: black;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.form-floating input {
  background: none;
  border: none;
  outline: none;
  border-radius: 0;
  border-bottom: 0.1rem solid black;
  color: black;
}

form button {
  margin-top: 1.5rem;
  color: black;
  padding: 0.3rem 1rem;
  background: none;
  border: none;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
}

.error {
  color: red;
}
</style>
