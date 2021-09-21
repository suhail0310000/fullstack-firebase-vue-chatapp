<template>
  <div class="mt-4">
    <h2>Welcome to Vue.js Chat App</h2>
    <form class="detail-box my-5">
      <div class="form-group my-3">
        <h4>Login to Chat</h4>
        <input
          type="text"
          v-model="email"
          class="form-control mb-4 mt-4"
          placeholder="Enter your email..."
        />
        <input
          type="password"
          v-model="password"
          class="form-control mb-4"
          placeholder="Enter your password..."
          v-on:keyup.enter="login"
        />
        <!-- <router-link :to="{ path: 'signup' }">
          <h6 class="mb-3" style="font-weight: 600">Create an account</h6>
        </router-link> -->

        <button
          type="button"
          v-on:click="login"
          class="btn btn-primary"
          style="font-weight: 600"
        >Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import Vue from "vue";
export default {
  app: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const auth = firebase.auth();
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(async res => {
          console.log(res);
          if (res.user) {
            // here we will look if the user that logs in, if his
            // uid matches with the id's in the db
            // As while signing up we have stored his uid as id in db
            await firebase
              .firestore()
              .collection("users")
              .where("id", "==", res.user.uid)
              .get()
              .then(querySnapshot => {
                // console.log("query", querySnapshot);
                querySnapshot.forEach(doc => {
                  let userData = doc.data();
                  localStorage.setItem("id", userData.id);
                  localStorage.setItem("name", userData.name);
                  localStorage.setItem("email", userData.email);
                  localStorage.setItem("password", userData.password);
                  localStorage.setItem("FirebaseDocumentId", doc.id);
                });
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // created() {
  //   if (localStorage.getItem("id")) this.$router.push("/chat");
  // }
};
</script>
















