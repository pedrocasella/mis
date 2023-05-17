  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
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
  const dbRef = ref(getDatabase());

  //verify access

     //verify access
     get(child(dbRef, 'access/')).then((snapshot) => {
  
      var snapshotValue = JSON.stringify(snapshot.val());

      // Verifica se a palavra existe nos dados
      if (snapshot.exists() && snapshotValue.indexOf(localStorage.getItem('mis_email')) !== -1) {
        console.log("Logged");
      } else {
        window.location.assign('./../login')
      }

    })
//preencher comunicado
get(child(dbRef, 'comunicado/')).then((snapshot) => {
    if (snapshot.exists()) {
       const data = snapshot.val()
       document.getElementById('title').value = data.titulo
       document.getElementById('comunicado').value = data.texto
       document.getElementById('switch_counter').checked = data.viewCounter
       document.getElementById('switch_comunicado').checked = data.viewComunicado
        document.getElementById('date').value = data.data
    }
})

//criar comunicado

document.getElementById('comunicado_btn').addEventListener('click', ()=>{
    const titulo = document.getElementById('title').value
    const comunicado = document.getElementById('comunicado').value
    const viewCounter = document.getElementById('switch_counter').checked
    const viewComunicado = document.getElementById('switch_comunicado').checked
    const date = document.getElementById('date').value
    const db = getDatabase();
    update(ref(db, 'comunicado/'), {
        titulo: titulo,
        texto: comunicado,
        data: date,
        viewComunicado: viewComunicado,
        viewCounter: viewCounter,
    })
    window.location.reload()
})

//set profile picture
document.getElementById('picture').style.backgroundImage = 'url(' + localStorage.getItem('photo_url') + ')'


//access manage

document.getElementById('picture').addEventListener('click', ()=>{
  window.location.assign('./manage')
})


//show window visibillity

    //Comunicado
    document.getElementById('insert_comunicado').style.display = localStorage.getItem('wpeen5E4AlMUzPODKq1D/dC1kQO?h91?Y0Ef==PUVg6mSbpeHduVY=v!s?AFv35BsWrZJQXb2sUU2731w7yFGbXvX!d0d5X8zbcWaLUrJw0TXl6VCb?Hh?OwITuisLtC?wINnHd9DEo6HAkJDS05XdngzP/2dCJbVYfC5?nzauqLdc=8On8yvCRoukKm3P8mC9WAUgsUpTq9/lVPZDgZz3fwEUWMNWWYC9lxYsD!-=ml8VOQtP6eBKr-PE34cxd6')

//view windows
  document.getElementById('ul_insertComunicado').addEventListener('click', ()=>{
      if(document.getElementById('insert_comunicado').style.display == 'block'){
        localStorage.setItem('wpeen5E4AlMUzPODKq1D/dC1kQO?h91?Y0Ef==PUVg6mSbpeHduVY=v!s?AFv35BsWrZJQXb2sUU2731w7yFGbXvX!d0d5X8zbcWaLUrJw0TXl6VCb?Hh?OwITuisLtC?wINnHd9DEo6HAkJDS05XdngzP/2dCJbVYfC5?nzauqLdc=8On8yvCRoukKm3P8mC9WAUgsUpTq9/lVPZDgZz3fwEUWMNWWYC9lxYsD!-=ml8VOQtP6eBKr-PE34cxd6', 'none')
          document.getElementById('insert_comunicado').style.display = 'none'
      }else{
          localStorage.setItem('wpeen5E4AlMUzPODKq1D/dC1kQO?h91?Y0Ef==PUVg6mSbpeHduVY=v!s?AFv35BsWrZJQXb2sUU2731w7yFGbXvX!d0d5X8zbcWaLUrJw0TXl6VCb?Hh?OwITuisLtC?wINnHd9DEo6HAkJDS05XdngzP/2dCJbVYfC5?nzauqLdc=8On8yvCRoukKm3P8mC9WAUgsUpTq9/lVPZDgZz3fwEUWMNWWYC9lxYsD!-=ml8VOQtP6eBKr-PE34cxd6', 'block')
          document.getElementById('insert_comunicado').style.display = 'block'
      }
  })

  document.getElementById('ul_insertComittes').addEventListener('click', ()=>{
    if(document.getElementById('insert_comittes').style.display == 'block'){
        document.getElementById('insert_comittes').style.display = 'none'
        localStorage.setItem('TY/nTq5yaLF3FwmLfFH6Y-wKFQTubOfNcb-p-mweUyI8lTdvrdHMxkierdCI8aqihf1B1MNJrCt0Wktd8aBS?ScbXhbuN!Jjqlc498IUd/4AOayyZ8x1?FGre2sb/Fl8lozm2BHN=-1dhMSLUVYJagr3WOCZVY3xj1PtvlFKi4f9Qi7HUnnt7fjSaohg2Onoc7BWJhVyiataX1MyQepJ-G1=VzS3wu3ZEbM5VX22BBcWSc6MCalLItoSq5vh883P','none')
    }else{
        document.getElementById('insert_comittes').style.display = 'block'
        localStorage.setItem('TY/nTq5yaLF3FwmLfFH6Y-wKFQTubOfNcb-p-mweUyI8lTdvrdHMxkierdCI8aqihf1B1MNJrCt0Wktd8aBS?ScbXhbuN!Jjqlc498IUd/4AOayyZ8x1?FGre2sb/Fl8lozm2BHN=-1dhMSLUVYJagr3WOCZVY3xj1PtvlFKi4f9Qi7HUnnt7fjSaohg2Onoc7BWJhVyiataX1MyQepJ-G1=VzS3wu3ZEbM5VX22BBcWSc6MCalLItoSq5vh883P','block')
    }
})
  