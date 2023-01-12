import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMrZvQgC7pgE6UvIxh2IYimRkpl-YR4VA",
    authDomain: "curso-21376.firebaseapp.com",
    projectId: "curso-21376",
    storageBucket: "curso-21376.appspot.com",
    messagingSenderId: "54094353471",
    appId: "1:54094353471:web:1354fbd50433addaa7548a",
    measurementId: "G-90F449WKDS"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };