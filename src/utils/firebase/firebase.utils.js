// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: 'AIzaSyC_Qy22IQgr9Guyss860TxVCQ7MK721tfQ',
   authDomain: 'crwn-clothing-db-29a14.firebaseapp.com',
   projectId: 'crwn-clothing-db-29a14',
   storageBucket: 'crwn-clothing-db-29a14.appspot.com',
   messagingSenderId: '1055849455669',
   appId: '1:1055849455669:web:269673353508a73f8d517c',
   measurementId: 'G-HDYQPLGB3H',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglepopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
   const userDocRef = doc(db, 'users', userAuth.uid);

   const userSnapshot = await getDoc(userDocRef);
   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
         });
      } catch (err) {
         console.log('errir creatubf the user', err.message);
      }
   }

   return userDocRef;
};
