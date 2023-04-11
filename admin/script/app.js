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
//Criar Comites

  //exibir caixas e tabelas
  get(child(dbRef, 'comites/')).then((snapshot) => {
    if (snapshot.exists()) {
       snapshot.forEach((childSnapshot)=>{
          const data = childSnapshot.val()
          const key = childSnapshot.key
          document.getElementById('ul_comittes').innerHTML += '<li><div class="" draggable="true">' + data.name + ' <span id="' + data.name.replaceAll(' ', '_') + '">x </span></div></li>'
          document.getElementById('select_comitte').innerHTML += '<option value="' + data.name + '">' + data.name + '</option>'
          document.getElementById('table_select').innerHTML += '<option value="' + data.name + '">' + data.name + '</option>'
          document.getElementById('table').innerHTML += '<table id="table' + data.name.replaceAll(' ','_') + '"> <thead> <tr> <th class="td_name">Participante</th> <th class="td_comite">Cargo</th> <th class="td_cargo">Comitê</th> </tr> </thead> <tbody id="colum' + data.name.replaceAll(' ', '_') + '"></tbody> </table>'
          //document.getElementById(data.name.replaceAll(' ', '_')).innerHTML +=

          //Exibir tabela de delegados
            get(child(dbRef, 'comites/' + data.name + '/delegados')).then((snapshot) => {
              if (snapshot.exists()) {
                snapshot.forEach((childSnapshot)=>{
                    const data = childSnapshot.val()
                    const key = childSnapshot.key
                    console.log(data.comite)
                    document.getElementById('colum' + data.comite.replaceAll(' ', '_')).innerHTML += '<tr> <td class="td_name">' + data.nome + '</td> <td class="td_cargo">' + data.cargo +  '</td> <td class="td_comite">' + data.comite + '</td> </tr>'
                })
                
              }
            })
       })
       
    }
  })


  //excluir caixa
  document.getElementById('ul_comittes').addEventListener('click', (e)=>{
    const elementId = e.target.id
    if(elementId == ''){
 
    }else{
      const db = getDatabase();
      remove(ref(db, 'comites/' + elementId.replaceAll('_',' '))).then(()=>{
        window.location.reload()
      })
    }

  })

  //adicionar comitê
  document.getElementById('insertComitte_btn').addEventListener('click', ()=>{
    const comites = document.getElementById('comite_name').value
    if(comites == ''){
      alert('O campo não pode ficar vazio!')
    }else{
      const db = getDatabase();
      set(ref(db, 'comites/' + comites), {
        name: comites,
      }).then(()=>{
        window.location.reload()
      })
    }
  })

  //adicionar participante
  document.getElementById('addParticipante_btn').addEventListener('click', ()=>{
      const selectComite = document.getElementById('select_comitte').value
      const nome = document.getElementById('participante_add').value
      const cargo = document.getElementById('function_add').value
      console.log('ok')
      if(document.getElementById('participante_add').value == '' || document.getElementById('select_comitte').value == 'null' ||  document.getElementById('function_add').value == ''){
        alert('Preencha todos os campos')
      }else{
        const db = getDatabase();
        set(ref(db, 'comites/' + selectComite + '/delegados/' + nome), {
          nome: nome,
          cargo: cargo,
          comite: selectComite,
      }).then(()=>{
        window.location.reload()
      })
      }
  })

  //gerar planilha
  document.getElementById('generate_btn').addEventListener('click', ()=>{
    const selectTable = document.getElementById('table_select').value
    // Definir os dados da planilha
    const tabela = document.getElementById('table' + selectTable.replaceAll(' ', '_'));


    // Converter a tabela em um objeto Worksheet do SheetJS
    const worksheet = XLSX.utils.table_to_sheet(tabela);
    
    // Criar um novo objeto Workbook
    const workbook = XLSX.utils.book_new();

    // Definir a largura de todas as colunas para 100 pixels
    worksheet['!cols'] = Array(worksheet['!ref'].split(':')[1].charCodeAt(0) - 64).fill({ wpx: 220 });

    // Definir a altura de todas as linhas para 30 pixels
    for(let i = 1; i <= worksheet['!ref'].split(':')[1].substr(1); i++) {
      worksheet[`!rows`] = [{ hpx: 30 }];
    }

    // Adicionar a Worksheet ao Workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, 'MIS_' + selectTable.replaceAll(' ', '_') + ".xlsx");
  })

//show window visibillity

    //Comunicado
    document.getElementById('insert_comunicado').style.display = localStorage.getItem('wpeen5E4AlMUzPODKq1D/dC1kQO?h91?Y0Ef==PUVg6mSbpeHduVY=v!s?AFv35BsWrZJQXb2sUU2731w7yFGbXvX!d0d5X8zbcWaLUrJw0TXl6VCb?Hh?OwITuisLtC?wINnHd9DEo6HAkJDS05XdngzP/2dCJbVYfC5?nzauqLdc=8On8yvCRoukKm3P8mC9WAUgsUpTq9/lVPZDgZz3fwEUWMNWWYC9lxYsD!-=ml8VOQtP6eBKr-PE34cxd6')

    //Inserir Comites
    document.getElementById('insert_comittes').style.display = localStorage.getItem('TY/nTq5yaLF3FwmLfFH6Y-wKFQTubOfNcb-p-mweUyI8lTdvrdHMxkierdCI8aqihf1B1MNJrCt0Wktd8aBS?ScbXhbuN!Jjqlc498IUd/4AOayyZ8x1?FGre2sb/Fl8lozm2BHN=-1dhMSLUVYJagr3WOCZVY3xj1PtvlFKi4f9Qi7HUnnt7fjSaohg2Onoc7BWJhVyiataX1MyQepJ-G1=VzS3wu3ZEbM5VX22BBcWSc6MCalLItoSq5vh883P')

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
  