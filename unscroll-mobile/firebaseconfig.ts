import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBcmWS3q7rm71M56t9jY4DN8nDUGV5gFw8",
  authDomain: "unscroll-8cc26.firebaseapp.com",
  projectId: "unscroll-8cc26",
  storageBucket: "unscroll-8cc26.firebasestorage.app",
  messagingSenderId: "963484492712",
  appId: "1:963484492712:web:df3a58158c44c2fbd9339d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);