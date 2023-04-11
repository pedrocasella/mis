  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, child, get, set, update} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
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
  get(child(dbRef, 'comunicado/')).then((snapshot) => {
    if (snapshot.exists()) {
       const data = snapshot.val()
       document.getElementById('comunicado').innerHTML = data.texto

       //View Counter
       if(data.viewCounter == false){
        document.getElementById('counter').style.display = 'none'
       }else{
        document.getElementById('counter').style.display = 'block'
       }

       //View Comunicado
       if(data.viewComunicado == false){
            document.getElementById('comunicados').style.display = 'none'
       }else{
            document.getElementById('comunicados').style.display = 'block'
       }
       
       //Contador
            // Defina a data de término
            const dataTermino = new Date(data.data);

            // Obtenha a data atual
            const dataAtual = new Date();

            // Calcule a diferença entre as datas em milissegundos
            const diferenca = dataTermino - dataAtual;

            // Converta a diferença em dias, horas, minutos e segundos
            let segundosRestantes = Math.floor(diferenca / 1000);
            let minutosRestantes = Math.floor(segundosRestantes / 60);
            let horasRestantes = Math.floor(minutosRestantes / 60);
            const diasRestantes = Math.floor(horasRestantes / 24);

            // Calcule os valores restantes para horas, minutos e segundos
            horasRestantes %= 24;
            minutosRestantes %= 60;
            segundosRestantes %= 60;


            // Atualize o contador a cada segundo
            setInterval(() => {
            segundosRestantes--;
            if (segundosRestantes < 0) {
                segundosRestantes = 59;
                minutosRestantes--;
                if (minutosRestantes < 0) {
                minutosRestantes = 59;
                horasRestantes--;
                if (horasRestantes < 0) {
                    horasRestantes = 23;
                    diasRestantes--;
                }
                }
            }
            document.getElementById('day').innerHTML = diasRestantes
            document.getElementById('hours').innerHTML = horasRestantes
            document.getElementById('minutes').innerHTML = minutosRestantes
            document.getElementById('seconds').innerHTML = segundosRestantes
            }, 1000);
            
            }
  })

  //Results
    //exibir caixas e tabelas
    get(child(dbRef, 'comites/')).then((snapshot) => {
     if (snapshot.exists()) {
        snapshot.forEach((childSnapshot)=>{
           const data = childSnapshot.val()
           const key = childSnapshot.key
           document.getElementById('table').innerHTML += '<table id="table' + data.name.replaceAll(' ','_') + '"> <thead> <tr> <th class="td_name">Participante</th> <th class="td_comite">Cargo</th> <th class="td_cargo">Comitê</th> </tr> </thead> <tbody id="colum' + data.name.replaceAll(' ', '_') + '"></tbody> </table>'

 
           //Exibir tabela de delegados
             get(child(dbRef, 'comites/' + data.name + '/delegados')).then((snapshot) => {
               if (snapshot.exists()) {
                 snapshot.forEach((childSnapshot)=>{
                     const data = childSnapshot.val()
                     const key = childSnapshot.key
                     document.getElementById('colum' + data.comite.replaceAll(' ', '_')).innerHTML += '<tr> <td class="td_name">' + data.nome + '</td> <td class="td_cargo">' + data.cargo +  '</td> <td class="td_comite">' + data.comite + '</td> </tr>'
                 })
                 
               }
             })
        })
        
     }
   })
          
        


