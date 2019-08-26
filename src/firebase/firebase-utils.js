import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBvKkUl1mWFkAds24BX9Oovc-Ggwiix7vQ",
  authDomain: "crown-clothing-e7dc5.firebaseapp.com",
  databaseURL: "https://crown-clothing-e7dc5.firebaseio.com",
  projectId: "crown-clothing-e7dc5",
  storageBucket: "",
  messagingSenderId: "964777416233",
  appId: "1:964777416233:web:5b363866235795e5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef
}



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase