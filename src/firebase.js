import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDhDY4NHhgzp2vELKMmHKF7X2u5DT0019Y",
	authDomain: "whatsapp-clone-5becd.firebaseapp.com",
	projectId: "whatsapp-clone-5becd",
	storageBucket: "whatsapp-clone-5becd.appspot.com",
	messagingSenderId: "113361870754",
	appId: "1:113361870754:web:950850e80a26e649619cfb",
	measurementId: "G-0SD0CWJ2PE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
