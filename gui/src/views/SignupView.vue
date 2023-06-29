<template lang="">
  <div class="page" id="signup">
    <div class="page" id="v-screen"  v-if="showOTP == true">
      <div class="verify">
        <h5>Verify email</h5>
        <h6>Enter the 5-digit OTP sent to your email</h6>
        <div class="inputs">
          <input type="text" maxLength="1" class="inp1" @keyup="focus2()" v-model="inputs.inp1" />
          <input type="text" maxLength="1" class="inp2" @keyup="focus3()" v-model="inputs.inp2" />
          <input type="text" maxLength="1" class="inp3" @keyup="focus4()" v-model="inputs.inp3" />
          <input type="text" maxLength="1" class="inp4" @keyup="focus5()" v-model="inputs.inp4" />
          <input type="text" maxLength="1" class="inp5" @keyup="verify()" v-model="inputs.inp5" />
        </div>
        <h6 class="error" v-if="errOTP == true">Incorrect OTP, try again</h6>
        <a href="" @click.prevent="sendOTP(payload)">Resend OTP</a>
        <button @click.prevent="verify()">
          <div class="bg">Verify</div>
          Verify
        </button>
      </div>
    </div>

    <div class="left" v-if="showOTP == false">
      <div class="signup_text">
        <h4>Sign up</h4>
        <p>
          Don't have an account with us yet? Go ahead and sign up by filling in
          the form to create one. Make sure you enter the correct information
        </p>
      </div>
    </div>
    <div class="right" v-if="showOTP == false">
      <form class="signup_form" @submit.prevent="sendOTP(payload); setShowOTP()">
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingText"
            placeholder="name@example.com"
            required
            v-model="payload.first_name"
          />
          <label for="floatingInput">Firstname</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingText"
            placeholder="name@example.com"
            required
            v-model="payload.last_name"
          />
          <label for="floatingInput">Lastname</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="0712345678"
            required
            v-model="payload.cellphone"
          />
          <label for="floatingInput">Cellphone number</label>
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
          <p>
            Already an account?
            <router-link to="/sign-in">Sign in</router-link>
          </p>
          <button type="submit" class="btnSign-in">
            <div class="bg">Sign_up</div>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      payload: {
        first_name: "",
        last_name: "",
        cellphone: "",
        email_add: "",
        client_pass: "",
      },
      inputs: {
        inp1: null,
        inp2: null,
        inp3: null,
        inp4: null,
        inp5: null
      }
      ,
      inputOTP: null,
      showOTP: false,
      errOTP: null,
      loading: false,
    };
  },
  computed: {
    ...mapGetters(["OTP"])
  },
  methods: {
    ...mapMutations(["setLogoLight"]),
    ...mapActions(["sendOTP","signUp"]),
    setShowOTP() {
      this.showOTP = true;
      if(this.showOTP == true) {
        
      }
    },
    verify() {
        this.inputOTP = `${this.inputs.inp1}${this.inputs.inp2}${this.inputs.inp3}${this.inputs.inp4}${this.inputs.inp5}`
        if (this.inputOTP == this.OTP) {
            this.signUp(this.payload)
        }else {
            this.errOTP = true;
        }
        
    },
    focus2() {
      document.querySelector(".inp2").focus();
    },
    focus3() {
      document.querySelector(".inp3").focus();
    },
    focus4() {
      document.querySelector(".inp4").focus();
    },
    focus5() {
      document.querySelector(".inp5").focus();
    },
  },
  created() {
    this.setLogoLight(true);
  },
};
</script>
<style scoped>
.page {
  justify-content: center;
  align-items: center;
}
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

.signup_text {
  color: white;
  margin: 0 4rem;
}

form {
  width: 25rem;
  height: 30rem;

  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: black;
  justify-content: center;
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
  margin-top: 2rem;
  color: black;
  padding: 0.3rem 1rem;
  background: none;
  border: none;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
}

.inputs {
  display: flex;
  gap: 1rem;
}

.inputs input {
  height: 10rem;
  width: 8rem;
  border-radius: 1rem;
  border: none;
  border: 0.2rem solid black;
  box-shadow: 0.1rem solid gray;
  font-size: 8rem;
  display: grid;
  place-items: center;
  text-align: center;
}

.inputs input:focus {
  background-color: black;
  color: white;
  caret-color: transparent;
}

#v-screen {
    position: absolute;
    width: 100vw;
    background-color: white;
    z-index: 7;
}

.verify {
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.verify button {
  padding: 0.4rem 1.4rem;
  border-radius: 0.3rem;
}
.error {
    color: red;
}
</style>
