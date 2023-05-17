  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getDatabase, ref, set, child, get, update, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBwVD90vvE65h7MEJmRZRRzwfD3rkWqFV4",
    authDomain: "mis-teste.firebaseapp.com",
    projectId: "mis-teste",
    storageBucket: "mis-teste.appspot.com",
    messagingSenderId: "423527193830",
    appId: "1:423527193830:web:a06144b8ca5cf73f386f27",
    databaseURL: 'https://mis-teste-default-rtdb.firebaseio.com/'
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  //Puxa os departamentos existentes no servidor e os exibe em lista
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'departamento/')).then((snapshot) => {
    if (snapshot.exists()) {
        const dataArray = [];
        snapshot.forEach((childSnapshot)=>{
            const data = childSnapshot.val()
            const key = childSnapshot.key
            dataArray.push(data);
        })

        const reversedDataArray = dataArray.reverse();
        reversedDataArray.forEach((data) => {
            console.log(data);
            document.getElementById('team-ul').innerHTML += '<li class="departament-li" id="' + data.name + '"> <h2>' + data.name + '</h2> </li>'
        });

    } else {
   
        
    }
    }).catch((error) => {
    console.error(error);
    });

    //Puxa os comites existentes no servidor, verifica se são visíveis e os exibe em seus determinados departamentos
    get(child(dbRef, 'comite/')).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot)=>{
                const data = childSnapshot.val()
                const key = childSnapshot.key
    
                console.log(data)
                if(data.visibility == 'open'){
                    if(data.departament == document.getElementById(data.departament).id){
                        document.getElementById(data.departament).innerHTML += '<h3>' + data.name + '</h3> <ul class="members-ul" id="' + data.name + '"></ul>'
                    }
                }else{
                    if(data.departament == document.getElementById(data.departament).id){
                        document.getElementById(data.departament).innerHTML += '<h3 style="display: none;">' + data.name + '</h3> <ul class="members-ul" id="' + data.name + '" style="display: none;"></ul>'
                    }
                }

    
            })
        } else {
       
            
        }
        }).catch((error) => {
        console.error(error);
        });

        //Puxa os membros cadastrados existentes no servidor e os distribui em seus determinados comitês e departamentos
        get(child(dbRef, 'equipe/')).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach((childSnapshot)=>{
                    const data = childSnapshot.val()
                    const key = childSnapshot.key
        
                    console.log(data)
                    if(data.comite == document.getElementById(data.comite).id){
                        document.getElementById(data.comite).innerHTML += '<li> <div class="picture" style="background-image: url(' + data.photo.replaceAll('"', '') + ')"></div> <div class="name">' + data.pref_name + '</div> <div class="cargo">' + data.cargo + '</div> </li>'
                    }
        
                })
            } else {
           
                
            }
        }).catch((error) => {
            console.error(error);
        });