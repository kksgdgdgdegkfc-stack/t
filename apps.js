// Your Firebase config from step 1
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

// Add name to Firestore
function addName() {
    const name = document.getElementById("nameInput").value;
    if (name) {
        db.collection("names").add({ name })
          .then(() => {
            document.getElementById("nameInput").value = "";
            fetchNames();
          });
    }
}

// Fetch names from Firestore
function fetchPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    db.collection("posts").orderBy("timestamp", "desc").get().then((snapshot) => {
        snapshot.forEach(doc => {
            const data = doc.data();
            const postEl = document.createElement("div");
            postEl.style.border = "1px solid #ccc";
            postEl.style.margin = "10px";
            postEl.style.padding = "10px";
            postEl.innerHTML = `<h3>${data.title}</h3><p>${data.description}</p>`;
            postsDiv.appendChild(postEl);
        });
    });
}

// Initial fetch
fetchPosts();
