import { initializeApp } from 'firebase/app'

// export const enum FIREBASE {
//   API_KEY = "AIzaSyCv01E5SKgvy7prvtXoPag61dd3QODUBWk",
//   AUTH_DOMAIN = "nft-marketplace-a000.firebaseapp.com",
//   PROJECT_ID = "nft-marketplace-a000",
//   STORAGE_BUCKET = "nft-marketplace-a000.appspot.com",
//   MESSAGING_SENDER_ID = "734015046022",
//   API_ID = "1:734015046022:web:575ce48b3f10ed5e9a2c07"
// }

const firebaseConfig = {
  apiKey: 'AIzaSyCv01E5SKgvy7prvtXoPag61dd3QODUBWk',
  authDomain: 'nft-marketplace-a000.firebaseapp.com',
  projectId: 'nft-marketplace-a000',
  storageBucket: 'nft-marketplace-a000.appspot.com',
  messagingSenderId: '734015046022',
  appId: '1:734015046022:web:575ce48b3f10ed5e9a2c07',
}

const app = initializeApp(firebaseConfig)
