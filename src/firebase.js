import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAscugdnv4fy6uV4IsnD6PPSCUMweR5Gf0',
  authDomain: 'slack-clone-a04e9.firebaseapp.com',
  databaseURL: 'https://slack-clone-a04e9.firebaseio.com',
  projectId: 'slack-clone-a04e9',
  storageBucket: 'slack-clone-a04e9.appspot.com',
  messagingSenderId: '545925852499',
  appId: '1:545925852499:web:db908a988c599516a105a6',
  measurementId: 'G-9RFBG96DPB'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
