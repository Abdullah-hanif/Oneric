// import firebase from "firebase/compat/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';
// export const firebaseConfig = {
    
// };
// if (!firebase.app.length) {
//     firebase.initializeApp(firebaseConfig)
// }


import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyBpfthHxw9NHtxUaerGVqZy2imc8JnDRcs",
    authDomain: "oneric-8d9bd.firebaseapp.com",
    projectId: "oneric-8d9bd",
    storageBucket: "oneric-8d9bd.appspot.com",
    messagingSenderId: "724408969920",
    appId: "1:724408969920:web:ea1ba3fdce920f46c99b25",
    measurementId: "G-6DRDT2WT0F"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;