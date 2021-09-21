<template>
  <div>
    <nav>
      <router-link to='/Chatroom'> Chatroom </router-link> |
      <span v-if="isLoggedIn"> 
        <button @click="signOut"> Logout </button> 
      </span>
      <span v-else>
        <router-link to='/'> Register </router-link> |
        <router-link to='/SignIn'> Login </router-link>
      </span>
    </nav>
      
    <router-view />
  </div>
  
</template>

<script setup>
import { ref } from 'vue' // used for conditional rendering
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
      console.log(user);
    } else {
      isLoggedIn.value = false // if we do not
      console.log(user);
    }
})

const signOut = () => {
  firebase.auth().signOut()
  router.push('/SignIn')
}
</script>
<style>
.loggedInNav {
  margin: auto;
  width: 60%;
  border: 5px solid #FFFF00;
  padding: 10px;
  display: flex;
  text-align: center;
} 



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
