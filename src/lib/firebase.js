import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAQHqFSWZ2DaaxazZl0eQe2b2dr16lby9M",
    authDomain: "survey-8045.firebaseapp.com",
    projectId: "survey-8045",
    storageBucket: "survey-8045.appspot.com",
    messagingSenderId: "823726453883",
    appId: "1:823726453883:web:8e28c0a5f141c4867d1ede",
    measurementId: "G-03J49MWXDT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { collection, getDocs,db }