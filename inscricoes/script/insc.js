const data = new Date()

//Contador
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`March 17 ${currentYear} 00:00:00`);

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

//close counter
const dataInsc = new Date()
const atualDay = dataInsc.getDate()
const atualMonth = dataInsc.getMonth() + 1
const month = '0' + atualMonth
const numberDate = parseInt(atualDay + month)
if(numberDate < 803 || numberDate > 1703){
    document.getElementById('await').style.display = 'block'
    document.getElementById('insc').style.display = 'none'
}else{
    document.getElementById('await').style.display = 'none'
    document.getElementById('insc').style.display = 'block'
}

const dataString = numberDate.toString()
if(dataString.indexOf('03') == -1 && dataString.indexOf('02') == -1){
    document.getElementById('await').style.display = 'none'
}

//submit insc

document.getElementById('submit_btn').addEventListener('click', ()=>{
    const name = document.getElementById('name').value
    const matricula = document.getElementById('matricula').value
    const turma = document.getElementById('turma').value
    const opt1 = document.getElementById('comite').value
    const opt2 = document.getElementById('comite_two').value
    const materia = document.getElementById('materia').value
    const cellphone = document.getElementById('contact').value
    const unidade = document.getElementById('local').value

    const resp = {
        'N° Matrícula': matricula,
        Nome: name,
        Turma: turma,
        'Comitê de Preferência': opt1,
        '2° Opção': opt2,
        Matéria: materia,
        Contato: cellphone,
        Unidade: unidade,
    }   

    if(name == '' || matricula == '' || turma == 'null' || opt1 == 'null' || opt2 == 'null' || materia == 'null' || cellphone == '' || unidade == 'null'){
        window.alert('Verifique se você deixou algum campo em branco e tente novamente!')
        document.querySelectorAll('select').forEach((req)=>{
            if(req.value == 'null'){
                req.style.borderColor = 'red'
                req.style.borderWidth = '2px'
            }else{
                req.style.borderColor = '#000'
                req.style.borderWidth = '1px'
            }
        })

        for(let i = 0; i <= document.querySelectorAll('input').length; i++){
            if(document.querySelectorAll('input')[i].value == ''){
                document.querySelectorAll('input')[i].style.borderColor = 'red'
                document.querySelectorAll('input')[i].style.borderWidth = '2px'
            }else{
                document.querySelectorAll('input')[i].style.borderColor = '#000'
                document.querySelectorAll('input')[i].style.borderWidth = '1px'
            }

        }
    }else{
        fetch('https://api.sheetmonkey.io/form/vLYhyt1J3yn9KT8QqGFJwg', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(resp)
        }).then((result)=>{
            if(result.status == 200){
                document.getElementById('sucess').style.display = 'block'
                document.getElementById('insc').style.display = 'none'
            }else{
                window.alert('Sua Inscrição não foi realizada. Tente novamente!')
            }
        })
    }

})

//comite options
setInterval(()=>{
    const value1 = document.getElementById('comite').value
    const subtitle1 = document.getElementById('sub_opt1')
    const value2 = document.getElementById('comite_two').value
    const subtitle2 = document.getElementById('sub_opt2')

    if(value1 == 'null'){
        subtitle1.innerHTML = ''
    }

    if(value1 == 'CSM/Wakanda'){
        subtitle1.innerHTML = '*' + 'CSM (S.H.I.E.L.D) - Violação de Wakanda à Carta das Nações Unidas.'
    }

    if(value1 == 'ICJ'){
        subtitle1.innerHTML = '*' + 'ICJ - EUA VS PALESTINA, Palestina denuncia Estados Unidos por mudar sua embaixada em Israel.'
    }

    if(value1 == 'OEA'){
        subtitle1.innerHTML = '*' + 'OEA - Invasão de Terras Índigenas nas Américas.'
    }

    if(value1 == 'UK Parliament'){
        subtitle1.innerHTML = '*' + 'UK Parliament - Debate para o fim da Monarquia e implementação de uma República no Reino Unido.'
    }

    if(value2 == 'null'){
        subtitle2.innerHTML = ''
    }
    
    if(value2 == 'CSM/Wakanda'){
        subtitle2.innerHTML = '*' + 'CSM (S.H.I.E.L.D) - Violação de Wakanda à Carta das Nações Unidas.'
    }
    
    if(value2 == 'ICJ'){
        subtitle2.innerHTML = '*' + 'ICJ - EUA VS PALESTINA, Palestina denuncia Estados Unidos por mudar sua embaixada em Israel.'
    }
    
    if(value2 == 'OEA'){
        subtitle2.innerHTML = '*' + 'OEA - Invasão de Terras Índigenas nas Américas.'
    }
    
    if(value2 == 'UK Parliament'){
        subtitle2.innerHTML = '*' + 'UK Parliament - Debate para o fim da Monarquia e implementação de uma República no Reino Unido.'
    }
    
    
})