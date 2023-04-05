function getFinanceTaquara(){
    const xhr = new XMLHttpRequest();
    const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetFinanceiro?nCodigoCliente=70293&sToken=5DdU0AB3IaWG&sParametrosBusca=valor=10';
    
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = xhr.responseXML;
        const financeiro = data.getElementsByTagName('Parcelas')
        for(let i = 0; i <= financeiro.length; i++){
            if(financeiro[i].childNodes[1].childNodes[27].innerHTML == 'MIS'){
                const element = financeiro[i].childNodes[1].childNodes
                const nome = element[21].innerHTML
                const date = element[11].innerHTML
                document.getElementById('list_pay_taquara').innerHTML += '<li> <ul class="data_taquara"> <li class="aluno"><span class="user_icon"></span>' + nome + '</li> <li class="valor"><span class="price_icon"></span>R$ 10,00</li> <li class="date"><span class="date_icon"></span>' + date + '</li> <li class="unidade"><span class="unit_icon"></span>Taquara</li> </ul> </li>'
               
            }
            
        }
      } else {
        console.error('Erro na requisição: ' + xhr.statusText);
      }
    };
    
    xhr.onerror = function() {
      console.error('Erro na requisição.');
    };
    
    xhr.send();
}

getFinanceTaquara()

function getFinanceRecreio(){
    const xhr = new XMLHttpRequest();
    const url = 'https://api.sponteeducacional.net.br/WSAPIEdu.asmx/GetFinanceiro?nCodigoCliente=73807&sToken=2yk4x30RjX2L&sParametrosBusca=valor=10';
    
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = xhr.responseXML;
        const financeiro = data.getElementsByTagName('Parcelas')
        for(let i = 0; i <= financeiro.length; i++){
            if(financeiro[i].childNodes[1].childNodes[27].innerHTML == 'MIS'){
                const element = financeiro[i].childNodes[1].childNodes
                const nome = element[21].innerHTML
                const date = element[11].innerHTML
                document.getElementById('list_pay_recreio').innerHTML += '<li> <ul class="data_recreio"> <li class="aluno"><span class="user_icon"></span>' + nome + '</li> <li class="valor"><span class="price_icon"></span>R$ 10,00</li> <li class="date"><span class="date_icon"></span>' + date + '</li> <li class="unidade"><span class="unit_icon"></span>Recreio</li> </ul> </li>'
               
            }
            
        }
      } else {
        console.error('Erro na requisição: ' + xhr.statusText);
      }
    };
    
    xhr.onerror = function() {
      console.error('Erro na requisição.');
    };
    
    xhr.send();
}

getFinanceRecreio()



document.getElementById('select_taquara').addEventListener('click', ()=>{
    document.getElementById('taquara_pay').style.display = 'block'
    document.getElementById('recreio_pay').style.display = 'none'
    
    document.getElementById('insc_value').innerHTML = '<strong>Total Inscritos:</strong> 102'
    const payValue = document.getElementById('list_pay_taquara').childNodes.length - 1 + ''
    document.getElementById('pay_value').innerHTML = '<strong>Qtd. Pago: </strong>' + payValue

    document.getElementById('total').innerHTML = '<strong>Total:</strong> R$ ' + payValue + '0,00'
})

document.getElementById('select_recreio').addEventListener('click', ()=>{
    document.getElementById('taquara_pay').style.display = 'none'
    document.getElementById('recreio_pay').style.display = 'block'

    document.getElementById('insc_value').innerHTML = '<strong>Total Inscritos:</strong> 30'
    const payValue = document.getElementById('list_pay_recreio').childNodes.length - 1 + ''
    document.getElementById('pay_value').innerHTML = '<strong>Qtd. Pago: </strong>' + payValue


    document.getElementById('total').innerHTML = '<strong>Total:</strong> R$ ' + payValue + '0,00'
})

document.getElementById('geral').addEventListener('click', ()=>{
    document.getElementById('taquara_pay').style.display = 'block'
    document.getElementById('recreio_pay').style.display = 'block'

    document.getElementById('insc_value').innerHTML = '<strong>Total Inscritos:</strong> 132'
    const payValue = document.getElementById('list_pay_recreio').childNodes.length  + document.getElementById('list_pay_taquara').childNodes.length - 2 + ''
    document.getElementById('pay_value').innerHTML = '<strong>Qtd. Pago: </strong>' + payValue

    document.getElementById('total').innerHTML = '<strong>Total:</strong> R$ ' + payValue + '0,00'
})