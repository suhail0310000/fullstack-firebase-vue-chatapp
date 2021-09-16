<template>
  <div>
    <nav>
      <span v-if="isLoggedIn">
        <div class="loggedInNav">
          <p>HEIIIII diplay emai </p>
          <button @click="signOut"> Logout </button> 
        </div>
      </span>
      <span v-else>
        <router-link to="/"> Register </router-link> |
        <router-link to="/sign-in"> Login </router-link>
      </span>
      <!-- <router-link to="/"> Home </router-link> | -->
      <!-- <router-link to="/chatroom"> Chatroom </router-link> | -->
    </nav>
      
    <router-view />
  </div>
  
</template>

<script setup>
import { ref } from 'vue' // used for conditional rendering
import firebase from 'firebase/app'
import { useRouter } from 'vue-router'


const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      isLoggedIn.value = true // if we have a user
    } else {
      isLoggedIn.value = false // if we do not
    }
})
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
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
