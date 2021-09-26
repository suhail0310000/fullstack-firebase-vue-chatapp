<template>
    <!--<h1> Chatroom </h1>
    <h3> This page is for users only </h3>-->
    <div class="container">
<h3 class=" text-center">Messaging</h3>
<div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h6>Your logged in as: {{ authUser.email }}</h6>
            </div>
          </div>
          <div class="inbox_chat">
            <div class="chat_list active_chat" style="border-top:solid black 2px;" v-for="user in allUsers" :key="user.id">
                <i class="material-icons" @click="getUser(user.id)">{{ user.name }}</i>
                <div class="chat_people">
                    <div class="chat_ib">
                        <h5>{{ user.displayName }}</h5>
                        <p> {{ user.email }}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
        <div class="mesgs">
          <div class="msg_history">
            <div class="mesgs" v-if="profile">
              <h5 class="overskrift">Welcome to your chat with {{ profile.name }}</h5>
              <ul class="chat collection"> 
                <!--<li v-for="message in messages" :key="message.id"> <h1>{{ message.from }} {{ message.description }}</h1> </li>-->
                <li v-for="(message,index) in messages" :key="index"> <div class="meld"><p>{{ message.description }}</p></div><span class="meld_fra">{{ message.from }}</span> </li>
                <!--<li v-for="(message, index) in messages" v-bind:key="index" :class="['message', sentOrReceived()]"> <h1>{{ message.from }} {{ message.timestamp }}</h1> </li>-->
              </ul>
              <!--<form @submit.prevent="addComment">
                <div class="field">
                  <label for="message">Skriv en melding </label>
                  <input type="text" name="message" v-model="newMessage">
                  <p v-if="feedback" class="red-text center">{{ feedback }}</p>
                </div>
              </form>-->

              <!--Fungerer -->
              <!--<form @submit.prevent="addMessage">
                <div class="field">
                  <input type="text" name="message" v-model="newMessage" placeholder="Type a message">
                  <p v-if="feedback" class="red-text center">{{ feedback }}</p>
                </div>
              </form>-->



               <form @submit.prevent="addMessage">
                <div class="field">
                  <div class="input_msg_write">
                    <input type="text" name="message" v-model="message" class="write_msg" placeholder="Type a message">
                    <p v-if="feedback" class="red-text center">{{ feedback }}</p>
                   <!-- <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>-->
                  </div>
                </div>
              </form>            
            </div>  
          </div>

          <!--<div class="type_msg">
            <div class="input_msg_write">
              <input @keyup.enter="saveMessage" v-model="message" type="text" class="write_msg" placeholder="Type a message" />
              <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
            </div>
          </div>-->
        </div> 
      </div>
            
    </div></div>
</template>


<script>
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
import { projectFirestore } from '../main'

export default {
    name: 'chatroom',
    data(){
        return {
            message: null, //bytt til messages, dersom du får null
            feedback:null,
            //message:null,
            messages:[],
            profile: null,
            allUsers:[],
            authUser:{},
            currentUser:null
        }
    },  

    //mounted(){
    //   console.log("PARAAAAM",this.$route.params.id);
    //   projectFirestore.collection('messages').onSnapshot((snapshot)=>{
    //     console.log("message");
    //     snapshot.docChanges().forEach(change =>{
    //       console.log("inne i for lopp")
    //       if(change.type=="added"){
    //         console.log("added");
    //         let doc = change.doc;
    //         console.log("doc data: ",doc.data())
    //         console.log("Melding blir sendt til:",doc.id)
    //         console.log("Melding blir sendt til:",doc.description)
    //         console.log("mer info:",this.authUser.email)
    //         console.log("Epost:",this.messages)
    //         console.log("TId melding ble sendt:",Date.now())
    //       }
    //     })
    //   })
    // }
    
      // projectFirestore.collection('messages').onSnapshot((snapshot)=>{
      //   snapshot.docChanges().forEach((change({

      //   })
      // })
    //   get().then(messages =>{
    //       messages.docs.forEach(doc => {
    //         let message = doc.data()
    //         console.log(message);
    //         // user.id = doc.id; //Iden over mot autogenerert id
    //         this.allUsers.unshift(message);
    //       })
    //       console.log("ALLE BRUKERE:",this.allUsers);
    //     })
    // },





    //   projectFirestore.collection('chat')
    //   snapshot.docChanges().forEach(change => {
    //     if(change.type == "added"){
    //       let doc = change.doc;
    //         console.log("doc data: ",doc.data())
    //         console.log("Melding blir sendt til:",doc.id)
    //         console.log("Melding blir sendt til:",doc.description)
    //         console.log("mer info:",this.authUser.email)
    //         console.log("Epost:",this.messages)
    //         console.log("TId melding ble sendt:",Date.now())
    //     })
    //   }
    // },



      
    // },


      // .onSnapshot((snapshot)=>{
      //   console.log("inne i forløkke");
      //   this.messages = snapshot.docs.map(doc => doc.data());
        
      //   console.log("Alle meldinger",this.messages);








        // snapshot.docChanges().forEach(change=>{
        //   console.log("Change",change);
        //   if(change.type == 'added'){
        //     let doc = change.doc;
        //     console.log("OPPPPS! Ny melding",doc.data());
        //     console.log("Melding fra:", doc.data().from)
        //     console.log("Melding til:", doc.data().to)
        //     console.log("Meldings beskrivelse:", doc.data().description)
        //     console.log("Meldings tid:", doc.data().time)
        //     this.messages.unshift({
        //       from: doc.data().from,
        //       to: doc.data().to,
        //       description: doc.data().description,
        //       time: doc.data().time
        //     }) //unshift, fra starten av array tilslutten
        //   }
        // })
      // })




    //},
    
    methods:{
      sentOrReceived(id){
        console.log(this.authuser.id);
        return id === this.$router.params.id? 'sent' : 'received'
      },
      // sentOrReceived(userID){
      //   return userID === this.user.id;
      // },
      getUser(id){
        this.$router.push({ name: 'chatbox', params: { id: id }});
      },
     
      fetchUsers(){
        projectFirestore.collection('users').get().then(users =>{
          users.docs.forEach(doc => {
            let user = doc.data()
            user.id = doc.id; //Iden over mot autogenerert id
            this.allUsers.push(user);
          })
          console.log("ALLE BRUKERE:",this.allUsers);
        })
      },
      addMessage(){
        console.log("inne i add message");
        if(this.message){
          this.feedback = null;
          projectFirestore.collection('chat').add({
            to: this.$route.params.id,
            from: this.authUser.email,
            description: this.message,
            createdAt: new Date(),
            }).then(()=>{
            this.message = null;
          })
        }else{
          this.feedback = "Skriv inn noe for å legge til melding"
        }
      }},

    //When the user is created
    created(){
      let referenceUser = projectFirestore.collection('users')

      //TRENGS KANKSJE IKKE FJERN,viktig!!!
      //referenceUser.where("id", "==", firebase.auth().currentUser.uid).get()

      /*.then(snapshot => {
        snapshot.forEach(doc => {
          this.currentUser = doc.data(),
          this.currentUser.id = doc.id
        })
      })*/
      
      referenceUser.doc(this.$route.params.id).get()
      .then(user => {
        this.profile = user.data();
      });

      

      projectFirestore.collection('chat').orderBy('createdAt').onSnapshot((snapshot) => {
          snapshot.docChanges().forEach(change => {
            let doc = change.doc;
            if(doc.data().to == this.$route.params.id){
              if(change.type=='added'){
              console.log("added");
              console.log("stemmer");
              console.log("doc data: ",doc.data())
              console.log("Melding blir sendt til:",doc.data().to)
              console.log("Beskrivelse:",doc.data().description)
              console.log("Melding email:",this.authUser.email)
              console.log("Tid melding ble sendt:",new Date())
              this.messages.unshift({
                from: doc.data().from,
                to: doc.data().to,
                description: doc.data().description,
                createdAt: new Date()
              })
              console.log("Alle meldinger:",this.messages);
              }
            }
          })
        })
    

      //List messages in different rooms
    

      //Messages
      
      this.fetchUsers();
      // this.fetchUsers();
      // this.fetchOneUser();
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.authUser=user;
        }else{
          this.authUser={}
        }
      })
      
    },
    //If the user is logged in, redirect to chatroom
    beforeRouteEnter(to,from,next) {
      next(vm=>{
        firebase.auth().onAuthStateChanged(user=>{
          if(user){
            next();
          }else{
            alert('you must be logged in to view this. Redirecting you to the login view')
            vm.$router.push('/signIn')
          }
        })
      })

    }
}
  
</script>

<style scoped>
.container{max-width:1100px; margin:auto;}
img{ max-width:100%;}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%; border-right:1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
  
}
.top_spac{ margin: 20px 0 0;}
.recent_heading {float: left; width:40%;}
.headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}
.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}

.chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}
.chat_ib h5 span{ font-size:13px; float:right;}
.chat_ib p{ font-size:14px; color:#989898; margin:auto}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}
.chat_people{ overflow:hidden; clear:both;}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
  
}
.inbox_chat { height: 550px; overflow-y: scroll;}
.active_chat{ background:#ebebeb;}
.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.meld_fra {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}
 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}
.field {
  /*border-top: 1px solid #c4c4c4;*/
  position: absolute;
  bottom: 80px;
  width: 30%;

}
/*.type_msg {border-top: 1px solid #c4c4c4;position: relative;}*/
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging { padding: 0 0 50px 0;}
.msg_history {
  height: 516px;
  overflow-y: auto;
}
.meld{
  background-color: lightskyblue;
  border-radius: 15px;
  
}

</style>