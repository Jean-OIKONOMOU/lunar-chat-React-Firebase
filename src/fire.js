import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAuzdcOqv_ZPNRaypeVUO4xCumQdrXmIc8",
    authDomain: "lunar-chat-8337b.firebaseapp.com",
    databaseURL: "https://lunar-chat-8337b.firebaseio.com",
    projectId: "lunar-chat-8337b",
    storageBucket: "lunar-chat-8337b.appspot.com",
    messagingSenderId: "79233455457",
    appId: "1:79233455457:web:b78c1fa2ba882f8a"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export default firebaseApp;