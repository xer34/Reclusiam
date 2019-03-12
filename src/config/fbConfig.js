import firebase from 'firebase/app' 

import 'firebase/firestore'
import 'firebase/auth'

 
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAbXs9R6-0ZJnobUVKGdR5vYW97ibo768o",
    authDomain: "reclusiam-c667f.firebaseapp.com",
    databaseURL: "https://reclusiam-c667f.firebaseio.com",
    projectId: "reclusiam-c667f",
    storageBucket: "reclusiam-c667f.appspot.com",
    messagingSenderId: "983020956661"
  };
  firebase.initializeApp(config);
  firebase.firestore()

  export default firebase