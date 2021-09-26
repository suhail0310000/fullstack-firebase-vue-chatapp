<template>
    <!--<h1> Login to Your Account </h1>
    <p> <input type='text' placeholder="Email" v-model='email'/> </p>
    <p> <input type='password' placeholder="Password" v-model='password'/> </p>
    <p> <button @click="signIn"> Submit </button> </p>-->
  <div class="mt-4">
    <h2>Login to your account</h2>
    <form class="detail-box my-5">
      <div class="form-group my-3">
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
          <h6 class="mb-3" style="font-weight: 600; color:coral;">Back to register</h6>
        </router-link>
        <button
          style="font-weight: 600;background-color:coral;"
          type="button"
          v-on:click="signIn"
          class="btn btn-primary"
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

<style scoped >
input[type="text"],
input[type="password"] {
  margin: 0 auto;
  width: 80%;
  border-radius: 40px;
}
.detail-box {
  padding: 5px;
  border: 1px solid lightgrey;
  width: 400px;
  min-height: 250px;
  margin: 0 auto;
  border-radius: 40px;
  border:5px coral solid;
}
h2,
h4 {
  color:coral;
  font-weight: 620;
}
</style>