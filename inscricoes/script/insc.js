const data = new Date()

//Contador
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`March 03 ${currentYear} 00:00:00`);

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
const numberDate = 303//parseInt(atualDay + month)
if(numberDate < 303 || numberDate > 1003){
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
        Whatsapp: cellphone,
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
        fetch('https://api.sheetmonkey.io/form/nv8ARZsDNUpHMyVVHM5SEg', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(resp)
        }).then((result)=>{
            if(result.status == 200){
                window.location.reload()
            }else{
                window.alert('Sua Inscrição não foi realizada. Tente novamente!')
            }
        })
    }

})