  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC00Z_qfyKTD84CU4OLxYBhwq3nqlooGNc",
    authDomain: "entregafinal-2eab6.firebaseapp.com",
    projectId: "entregafinal-2eab6",
    storageBucket: "entregafinal-2eab6.appspot.com",
    messagingSenderId: "212181366106",
    appId: "1:212181366106:web:d6f92f13abc0abdca62f63",
    measurementId: "G-SLNJSV9791"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
