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

<script setup>
import { ref } from 'vue'
import firebase from 'firebase/app'
import { useRouter } from 'vue-router' // import router

const email = ref('')
const password = ref('')
const message = ref('')
const router = useRouter() // get a reference to our vue router
const signIn = () => { // we also renamed this method 
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      console.log('Successfully logged in!');
      console.log("User: ", data);
      router.push('/Chatroom') // redirect to the feed
    })
    .catch(error => {
      console.log(error.code)
      alert(error.message);
    })
}
</script>
















