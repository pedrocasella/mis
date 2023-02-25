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
const numberDate = parseInt(atualDay + month)
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