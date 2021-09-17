<template>
  <div class="mt-4">
    <h2>Welcome to Vue.js Chat App</h2>
    <form class="detail-box my-5">
      <div class="form-group my-3">
        <h4>Signup to Chat</h4>
        <input
          type="textttt"
          v-model="name"
          class="form-control mb-4 mt-4"
          placeholder="Enter your name..."
        />
        <input
          type="text"
          v-model="email"
          class="form-control mb-4"
          placeholder="Enter your email..."
        />
        <input
          type="password"
          v-model="password"
          class="form-control mb-4"
          placeholder="Enter your password..."
        />
        <router-link :to="{ path: '/' }">
          <h6 class="mb-3" style="font-weight: 600">Back to login</h6>
        </router-link>
        <button
          style="font-weight: 600"
          type="button"
          v-on:click="signup"
          class="btn btn-primary"
        >Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import Vue from "vue";
export default {
  app: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      const auth = firebase.auth();
      const name = this.name;
      const email = this.email;
      const password = this.password;
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(async res => {
          console.log("res", res);
          // once we get the res from db then only we will save data to ls so that our local and db are in sync
          await firebase
            .firestore()
            .collection("users")
            .add({
              name,
              id: res.user.uid,
              email,
              password,
            })
            .then(ref => {
              //trengs ikke forløpig
              // localStorage.setItem("id", res.user.uid);
              // localStorage.setItem("name", name);
              // localStorage.setItem("email", email);
              // localStorage.setItem("password", password);
              // localStorage.setItem("FirebaseDocumentId", ref.id);
              this.name = "";
              this.email = "";
              this.password = "";
              this.$router.push("/Chatroom");
            })
            .catch(err =>  alert(err));
        })
        .catch(err => {
          console.log(err)
          alert(err);
        });
    }
  }
};
</script>

<style scoped >
input[type="text"],
input[type="password"] {
  margin: 0 auto;
  width: 80%;
}
.detail-box {
  padding: 5px;
  border: 1px solid lightgrey;
  width: 400px;
  min-height: 250px;
  margin: 0 auto;
}
h2,
h4 {
  color: dodgerblue;
  font-weight: 600;
}
</style>





