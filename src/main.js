import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'


/* code from our Firebase console */
const config = {
  apiKey: "AIzaSyC6iLrEADUlYRrEEwnED5dgTf1uzeZFK8k",
  authDomain: "testchatapp-92549.firebaseapp.com",
  projectId: "testchatapp-92549",
  storageBucket: "testchatapp-92549.appspot.com",
  messagingSenderId: "436709502607",
  appId: "1:436709502607:web:85061c33c7de2452998afa",
  measurementId: "G-FCWRLDQYDE"
};

// Initialize Firebase
firebase.initializeApp(config)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

const app = createApp(App)

app.use(router)

app.mount('#app')

window.projectFirestore=projectFirestore;

projectFirestore.settings({
  timestampInSnapshots: true
});

export{ projectFirestore, timestamp, projectAuth }



