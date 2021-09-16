<template>
    <div>
        <h3>Logg inn med google brukeren for å fortsette</h3>
        <button @click="login">Login with google</button>
    </div>

</template>

<script>

import firebase from 'firebase'

export default {

    methods:{
        login(){
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly'); 


            firebase.auth().signInWithPopup(provider).then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = result.credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                this.$router.push('/')
                // ...
            }).catch(function(error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }
    }         
}
</script>
