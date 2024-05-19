var firebaseConfig = {
    apiKey: "AIzaSyBg6g3Z53z4kXTMa_d19jfnX4h--nbo9HM",
    authDomain: "first-class-firebase-auth.firebaseapp.com",
    projectId: "first-class-firebase-auth",
    storageBucket: "first-class-firebase-auth.appspot.com",
    messagingSenderId: "73334631764",
    appId: "1:73334631764:web:247bf7db442726682e6cc1"
};


var firebaseApp = firebase.initializeApp(firebaseConfig);

function signUpNewUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;

            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage)
            // ..
        });
}