import * as firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyDu_kFkxcAWB6yOl7vpT35YUz0T9RrDVd8',
    authDomain: 'chat-app-b0c1e.firebaseapp.com',
    databaseURL: 'https://chat-app-b0c1e.firebaseio.com',
    projectId: 'chat-app-b0c1e',
    storageBucket: 'chat-app-b0c1e.appspot.com',
    messagingSenderId: '838341989790',
    appId: '1:838341989790:web:0a65325a2a6bde7116328f',
    measurementId: 'G-W58R9SQNV5'
};

firebase.initializeApp(firebaseConfig);
export const fb = firebase.database();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const faceBookAuthProvider = new firebase.auth.FacebookAuthProvider();
