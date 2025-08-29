// Firebase config (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyBQF8ZghNfUT-6Lx3CCQnk-L6Jkn_vgGgo",
  authDomain: "test-website-awesomesauce.firebaseapp.com",
  databaseURL: "https://test-website-awesomesauce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-website-awesomesauce",
  storageBucket: "test-website-awesomesauce.firebasestorage.app",
  messagingSenderId: "734155877519",
  appId: "1:734155877519:web:8273db49a56e97c34dd4fa",
  measurementId: "G-Z97J70WFLY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Admin credentials
const ADMIN_USER = "admin";
const ADMIN_PASS = "123";

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === ADMIN_USER && password === ADMIN_PASS) {
        document.getElementById("loginDiv").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
    } else {
        alert("Wrong credentials!");
    }
}

// Send post to Firestore
function sendPost() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if(title && description) {
        db.collection("posts").add({
            title,
            description,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert("Post added!");
            document.getElementById("title").value = "";
            document.getElementById("description").value = "";
        });
    }
}
