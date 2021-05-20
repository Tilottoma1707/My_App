import firebase from 'firebase'

require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCFgckm6DwVFg6-qb5jib_sBgNudZrMIGU",
    authDomain: "my-app-aacb5.firebaseapp.com",
    projectId: "my-app-aacb5",
    storageBucket: "my-app-aacb5.appspot.com",
    messagingSenderId: "396983449879",
    appId: "1:396983449879:web:6b5836e3fba4cb7232df52"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()