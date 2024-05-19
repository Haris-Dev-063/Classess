var firebaseConfig = {
    apiKey: "AIzaSyBg6g3Z53z4kXTMa_d19jfnX4h--nbo9HM",
    authDomain: "first-class-firebase-auth.firebaseapp.com",
    databaseURL: "https://first-class-firebase-auth-default-rtdb.firebaseio.com",
    projectId: "first-class-firebase-auth",
    storageBucket: "first-class-firebase-auth.appspot.com",
    messagingSenderId: "73334631764",
    appId: "1:73334631764:web:247bf7db442726682e6cc1"
}
var firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// function signUpGoogle() {
//     var provider = new firebase.auth.GoogleAuthProvider();

//     firebaseApp
//         .auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;

//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             console.log(user);
//         })
//         .catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorMessage);
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });
// }

// function signUpGithub() {
//     var provider = new firebase.auth.GithubAuthProvider();

//     firebase
//         .auth()
//         .signInWithPopup(provider)
//         .then((result) => {
//             /** @type {firebase.auth.OAuthCredential} */
//             var credential = result.credential;

//             // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//             var token = credential.accessToken;

//             // The signed-in user info.
//             var user = result.user;
//             console.log(user)
//             // IdP data available in result.additionalUserInfo.profile.
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorMessage)
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//         });
// }



// ***************************** DataBase ******************* //

// var obj = {
//     name: "Furqan",
//     emailAddress: "furqan@gmail.com"
// }



// function writeUserData(obj) {
//     firebaseApp.database().ref('users/user001',).set({
//         obj
//     });
// }

// writeUserData(obj)


function writeUserData(email, name, id) {
    firebase.database().ref(`users/${id}`).set({
        uname: name,
        uemail: email,
        uid: id
    })
}

// Function to get input values and call writeUserData
function addItemsFormDatabase() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const userId = Math.round(Math.random() * 9999999);

    writeUserData(email, name, userId);
}