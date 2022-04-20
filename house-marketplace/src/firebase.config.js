import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJ5ZGHM5Qzx_HONajiFl8SOtF2o-pAUpA',
  authDomain: 'house-marketplace-app-bd010.firebaseapp.com',
  projectId: 'house-marketplace-app-bd010',
  storageBucket: 'house-marketplace-app-bd010.appspot.com',
  messagingSenderId: '578694022553',
  appId: '1:578694022553:web:1cbb21e28bb6c01fc4bf08',
  measurementId: 'G-8NDJNWVSN9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
