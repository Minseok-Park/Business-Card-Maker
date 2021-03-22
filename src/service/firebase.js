var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};
// Initialize Firebase
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
