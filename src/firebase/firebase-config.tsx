import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCh_Jf1pXs4DxZt8bJNaLMiv0pjGOuWd28",
  authDomain: "journal-app-react-c4b8c.firebaseapp.com",
  projectId: "journal-app-react-c4b8c",
  storageBucket: "journal-app-react-c4b8c.appspot.com",
  messagingSenderId: "647883423637",
  appId: "1:647883423637:web:feb242fcc8c0a4992b009c",
  measurementId: "G-B3TDZFPP7R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
  db, googleAuthProvider, firebase
}