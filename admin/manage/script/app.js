  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, child, get, set, update, remove, push} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
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
  const dbRef = ref(getDatabase());

    //verify access
    get(child(dbRef, 'access/')).then((snapshot) => {
  
      var snapshotValue = JSON.stringify(snapshot.val());

      // Verifica se a palavra existe nos dados
      if (snapshot.exists() && snapshotValue.indexOf(localStorage.getItem('mis_email')) !== -1) {
        console.log("Logged");
      } else {
        window.location.assign('./../../login')
      }

    })

  document.getElementById('add_btn').addEventListener('click', ()=>{
    const email = document.getElementById('email').value
    const db = getDatabase();
    if(email == ''){
      alert('O campo não pode ficar vazio!')
    }else{
        const acessRef = ref(db, 'access/')
        const pushAcess = push(acessRef)
        set(pushAcess, {
           email: email,                
        }).then(()=>{
            window.location.reload()
        })
    }
  })

  //set profile picture and name
  document.getElementById('picture').style.backgroundImage = 'url(' + localStorage.getItem('photo_url') + ')'

  document.getElementById('name').innerHTML = localStorage.getItem('displayName')


  get(child(dbRef, 'access/')).then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot)=>{
          const data = childSnapshot.val()
          const key = childSnapshot.key
          document.getElementById('emails_list').innerHTML += '<li>' + data.email + '<span class="delete" id="' + key + '"> X</span></li>'
      })
      
    }
  })

  document.getElementById('emails_list').addEventListener('click', (e)=>{
    const id = e.target.id
    const db = getDatabase();
    
    if(id == '' || id == 'emails_list'){

    }else{
        
        remove(ref(db, 'access/' + id + '/')).then(()=>{
            window.location.reload()
          })
    }
  })

  document.getElementById('view_acess').addEventListener('click', ()=>{
    
    if(document.getElementById('set_access').style.display == 'block'){
        document.getElementById('set_access').style.display = 'none'
    }else{
        document.getElementById('set_access').style.display = 'block'
    }
  })

  document.getElementById('mis').addEventListener('click', ()=>{
    window.location.assign('./../')
  })

  //exit
  document.getElementById('exit').addEventListener('click', ()=>{
    localStorage.removeItem('mis_email')
    localStorage.removeItem('photo_url')
    localStorage.removeItem('displayName')
    window.location.reload()
  })