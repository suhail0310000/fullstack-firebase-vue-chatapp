import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

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

export { projectFirestore, timestamp, projectAuth }
//ORIG 2
// import firebase from 'firebase/app'
// import 'firebase/firestore'

// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC6iLrEADUlYRrEEwnED5dgTf1uzeZFK8k",
//   authDomain: "testchatapp-92549.firebaseapp.com",
//   projectId: "testchatapp-92549",
//   storageBucket: "testchatapp-92549.appspot.com",
//   messagingSenderId: "436709502607",
//   appId: "1:436709502607:web:85061c33c7de2452998afa",
//   measurementId: "G-FCWRLDQYDE"
// };

// firebase.initializeApp(firebaseConfig)

// const projectFirestore = firebase.firestore()
// const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export { projectFirestore, timestamp }


//ORIGG
// import { createApp } from 'vue'
// import router from './router'
// import App from './App.vue'
// import firebase from 'firebase/app'

// const firebaseConfig = {
//   apiKey: "AIzaSyC6iLrEADUlYRrEEwnED5dgTf1uzeZFK8k",
//   authDomain: "testchatapp-92549.firebaseapp.com",
//   projectId: "testchatapp-92549",
//   storageBucket: "testchatapp-92549.appspot.com",
//   messagingSenderId: "436709502607",
//   appId: "1:436709502607:web:85061c33c7de2452998afa",
//   measurementId: "G-FCWRLDQYDE"
// };

// firebase.initializeApp(firebaseConfig)

// const app = createApp(App)

// app.use(router)
// app.mount('#app')



