import firebase from 'firebase/app'


const config = {
  apiKey: "AIzaSyDm0h1GmDQOiuJRfrp3fV2FdQF6ApE9HA8",
  authDomain: "final-project-cc-b708e.firebaseapp.com",
  databaseURL: "https://final-project-cc-b708e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-cc-b708e",
  storageBucket: "final-project-cc-b708e.appspot.com",
  messagingSenderId: "659445937865",
  appId: "1:659445937865:web:a12314854d3caafc76ff18",
  measurementId: "G-7F5JJR0MG6"
};

const fire = firebase.initializeApp(config);
export default fire;