import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCkqVuCSzIxmruAIXFD4oERhxRHuIhllFc",
    authDomain: "fir-rn-59d97.firebaseapp.com",
    projectId: "fir-rn-59d97",
    storageBucket: "fir-rn-59d97.appspot.com",
    messagingSenderId: "1003009296648",
    appId: "1:1003009296648:web:c321b6293eee66e68044bd"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;
