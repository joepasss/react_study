import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGOYoiFQpMGy5MQDyy-yOcCOZW3bITYJ4',
  authDomain: 'house-market-main.firebaseapp.com',
  projectId: 'house-market-main',
  storageBucket: 'house-market-main.appspot.com',
  messagingSenderId: '166163210081',
  appId: '1:166163210081:web:47c4d8c3cf5e46c364af20',
};

// Initialize Firebase

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
