import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCrPQQNIh2ujh7Xs1eDvyFhWM3p5AhPBAc",
    authDomain: "snapchat-clone-6687e.firebaseapp.com",
    projectId: "snapchat-clone-6687e",
    storageBucket: "snapchat-clone-6687e.appspot.com",
    messagingSenderId: "151268407242",
    appId: "1:151268407242:web:938c900c0d28535f378133"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const storage = firebase.storage();

  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, storage, provider, auth };