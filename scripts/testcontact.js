const firebaseConfig = {
  apiKey: "AIzaSyCpVsmKrNkal5GPLe9OngU4qnRtxhUb25Q",
  authDomain: "testproject-29b36.firebaseapp.com",
  databaseURL: "https://testproject-29b36-default-rtdb.firebaseio.com",
  projectId: "testproject-29b36",
  storageBucket: "testproject-29b36.appspot.com",
  messagingSenderId: "1032472879469",
  appId: "1:1032472879469:web:144911669e316f9ab43a64",
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child("userdetails");
detailsRef.on("child_added", function (snapshot, prevChildkey) {
  var newPost = snapshot.val();
});

function send() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  detailsRef.push().set({
    fullname: fullName,
    email: email,
    message: message,
  });
}
