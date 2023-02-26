document.querySelector('.blob-btn').addEventListener('click', ()=>{
    window.open('https://www.instagram.com/projetomis/')
})


//theme
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if(prefersColorScheme.matches){
    document.querySelector("link[rel='icon']").href = './icon/whitemis00354.png'
    document.querySelector('body').style.backgroundColor = '#202124'
    document.querySelector('.aic_title').style.color = '#fff'
    document.querySelector('.nav-wave').innerHTML = '<path fill="#202124" fill-opacity="1" d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,101.3C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>'
    document.querySelector('.insc-wave').innerHTML = '<path fill="#202124" fill-opacity="1" d="M0,128L80,160C160,192,320,256,480,240C640,224,800,128,960,101.3C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>'
    document.querySelector('.comite_card').style.backgroundColor = '#202124'
    document.getElementById('title').style.color = '#fff'
    document.querySelector('.modal_about').style.backgroundColor = '#202124'
    document.querySelector('.modal_about').style.webkitBoxShadow = '5px 5px 15px 5px rgba(255, 255, 255, 0.10)'
    document.querySelector('.modal_about').style.boxShadow = '5px 5px 15px 5px rgba(255, 255, 255, 0.10)'
    document.querySelector('.imprensa').style.backgroundColor = '#202124'
    document.querySelector('.about').style.backgroundColor = '#202124'
    document.querySelector('.paper_wave').style.backgroundImage = 'url(./../img/paperwave_black.png)'
    document.querySelector('.inscricoes').style.backgroundColor = '#202124'
    document.querySelector('.text_aic').style.backgroundColor = '#202124'
    document.querySelector('.picture_aic').style.backgroundColor = '#202124'
    document.querySelector('.background_aic').style.backgroundColor = '#202124'
    document.querySelector('.journal_2021').style.backgroundImage = 'url(./../icon/journal_icon_white.png)'
    document.querySelector('.button').style.borderColor = '#fff'
}else{
    document.querySelector("link[rel='icon']").href = './icon/blackmis00354.png'
}

//Nav bar
setInterval(()=>{
    var screenY = window.scrollY
    if(screenY > 285){
        document.getElementById('navigation').style.animation = 'opacity .5s ease-in'
        document.getElementById('navigation').style.display = 'block'
    }else{
        document.getElementById('navigation').style.display = 'none'
    }
},100*5)

//change backgrounds comites
document.getElementById('icj').addEventListener('mouseover', ()=>{
    document.getElementById('background_comite').style.backgroundImage = 'url(./../img/icjcouncil.jpg)'
    document.getElementById('background_comite').style.backgroundPositionY = '5.5rem'

    //change cards
    document.getElementById('picture').style.backgroundImage = 'url(./../img/icjcouncil.jpg)'
    document.getElementById('title').innerText = 'Corte Internacional de Justiça'
    document.getElementById('resume').innerText = 'O ICJ nesta edição do MIS, irá tratar de uma acusação feita pela Palestina sobre a decisão dos Estados Unidos de mudar sua embaixada de Tel-Aviv para Jerusalém. A Palestina acusa os EUA de violação da Convenção de Viena, a qual diz que a missão diplomática de um país deve ser estabelecida no Estado Receptor, porém Jerusalém possuí um "status especial". a Palestina pediu que a ICJ ordene a retirada da missão diplomática dos EUA de Jerusalém. O ICJ será composto por até 17 juízes, cada um representando seu respectivo país, juntamente de seus interesses, e contará também com os juízes ad hoc de Israel e Palestina.'
})

document.getElementById('shield').addEventListener('mouseover', ()=>{
    document.getElementById('background_comite').style.backgroundImage = 'url(./../img/Cap2_5768.webp)'
    document.getElementById('background_comite').style.backgroundPositionY = '5.5rem'

    //change cards
    document.getElementById('picture').style.backgroundImage = 'url(./../img/Cap2_5768.webp)'
    document.getElementById('title').innerText = 'Conselho de Segurança Mundial'
    document.getElementById('resume').innerText = 'O Conselho de Segurança Mundial é o novo comitê experimental do MIS, ele será inspirado no CSM da Marvel, o mesmo que controla a S.H.I.E.L.D em assuntos internacionais. Seu tema será uma denúncia feita pelos EUA em acusação à Wakanda, pelos crimes de negligência e omissão durante o período em que manteve a verdadeira forma de sua nação oculta ao mundo, se passando por uma nação humilde e desprovida de recursos, assim descumprindo as obrigações propostas pela Carta das Nações Unidas (Art. 1, Art. 2), a qual, a mesma assinou.'
})

document.getElementById('oas').addEventListener('mouseover', ()=>{
    document.getElementById('background_comite').style.backgroundImage = 'url(./../img/oasassembleia.jpg)'
    document.getElementById('background_comite').style.backgroundPositionY = '-2rem' 

    //change cards
    document.getElementById('picture').style.backgroundImage = 'url(./../img/oasassembleia.jpg)'
    document.getElementById('title').innerText = 'OAS - Organização dos Estados Americanos'
    document.getElementById('resume').innerText = 'A Organização dos Estados Americanos é um Órgão responsável por discutir, propor e aplicar solu- ções que sejam de interesse mútuo de seus Estados-Membros. No OAS existem diversos comitês, porém  somente três órgãos são os principais. No MIS, teremos dois órgãos primários unificados em um só comitê, a Assembléia-Geral, e a Secretaria-Geral. a votação desse comitê para resoluções de propostas será feita por maioria simples, logo, o secretário e o adjunto só estão colocados para assinatura do projeto que será votado no final do MIS, não tendo poder algum que os difere dos outros, além de poder de representação. O tema da OEA será a invasão das terras indígenas, e o objetivo do comitê será propor, em acordo com os Estados Americanos, uma solução para o fim dessa prática. Os alunos representarão embaixadores e cada um irá representar os interesses de seu país. A composição do OEA, será dada por embaixadores, que representarão seus países, e pela secretaria geral que terá o objetivo de presidir as sessões e ao final, assinar o projeto de resolução.'
})

document.getElementById('uk').addEventListener('mouseover', ()=>{
    document.getElementById('background_comite').style.backgroundImage = 'url(./../img/ukparliamentbackground.webp)'
    document.getElementById('background_comite').style.backgroundPositionY = '0rem'

    //change cards
    document.getElementById('picture').style.backgroundImage = 'url(./../img/ukparliamentbackground.webp)'
    document.getElementById('title').innerText = 'UK Parliament'
    document.getElementById('resume').innerText = ''
})

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
