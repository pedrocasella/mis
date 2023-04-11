  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
  import { getDatabase, ref, child, get, set, update, remove} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCAVoQo5DlCquCYVq2LVvajvJs1dbEszss",
    authDomain: "modelo-icone-de-simulacao.firebaseapp.com",
    databaseURL: "https://modelo-icone-de-simulacao-default-rtdb.firebaseio.com/",
    projectId: "modelo-icone-de-simulacao",
    storageBucket: "modelo-icone-de-simulacao.appspot.com",
    messagingSenderId: "272079089353",
    appId: "1:272079089353:web:674ebbb1599fd230ef2718"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const dbRef = ref(getDatabase());

  document.getElementById('login_btn').addEventListener('click', ()=>{
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
         //verify access
         get(child(dbRef, 'access/')).then((snapshot) => {
  
          var snapshotValue = JSON.stringify(snapshot.val());
    
          // Verifica se a palavra existe nos dados
          if (snapshot.exists() && snapshotValue.indexOf(user.email) !== -1) {
            localStorage.setItem('photo_url', user.photoURL)
            localStorage.setItem('displayName', user.displayName)
            localStorage.setItem('mis_email', user.email)
            window.location.assign('./../admin/')
          } else {
            alert('Acesso Negado!')
            window.location.reload()
          }
    
        })
    

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  })