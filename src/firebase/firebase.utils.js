import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAUr7VuT7dByKG11KMmK0W3XLWIgK2wWtY',
  authDomain: 'crwn-db-mocpe.firebaseapp.com',
  projectId: 'crwn-db-mocpe',
  storageBucket: 'crwn-db-mocpe.appspot.com',
  messagingSenderId: '285701298779',
  appId: '1:285701298779:web:a5a74f70910fee9224bd7e',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
