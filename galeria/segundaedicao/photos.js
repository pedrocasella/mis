const photos = [
  'DSC_8177.JPG',
  'DSC_8181.JPG',
  'DSC_8182.JPG',
  'DSC_8184.JPG',
  'DSC_8187.JPG',
  'DSC_8189.JPG',
  'DSC_8190.JPG',
  'DSC_8194.JPG',
  'DSC_8200.JPG',
  'DSC_8201.JPG',
  'DSC_8203.JPG',
  'DSC_8215.JPG',
  'DSC_8216.JPG',
  'DSC_8219.JPG',
  'DSC_8220.JPG',
  'DSC_8225.JPG',
  'DSC_8226.JPG',
  'DSC_8228.JPG',
  'DSC_8231.JPG',
  'DSC_8234.JPG',
  'DSC_8240.JPG',
  'DSC_8243.JPG',
  'DSC_8244.JPG',
  'IMG_0677.JPG',
  'IMG_0678.JPG',
  'IMG_0679.JPG',
  'IMG_0680.JPG',
  'IMG_0681.JPG',
  'IMG_0683.JPG',
  'IMG_0684.JPG',
  'IMG_0685.JPG',
  'IMG_0686.JPG',
  'IMG_0687.JPG',
  'IMG_0688.JPG',
  'IMG_0689.JPG',
  'IMG_0690.JPG',
  'IMG_0691.JPG',
  'IMG_0692.JPG',
  'IMG_0693.JPG',
  'IMG_0694.JPG',
  'IMG_0695.JPG',
  'IMG_0696.JPG',
  'IMG_0697.JPG',
  'IMG_0698.JPG',
  'IMG_0699.JPG',
  'IMG_0700.JPG',
  'IMG_0725.JPG',
  'IMG_0726.JPG',
  'IMG_0727.JPG',
  'IMG_0729.JPG',
  'IMG_0730.JPG',
  'IMG_0731.JPG',
  'IMG_0732.JPG',
  'IMG_0733.JPG',
  'IMG_0734.JPG',
  'IMG_0735.JPG',
  'IMG_0736.JPG',
  'IMG_0737.JPG',
  'IMG_0738.JPG',
  'IMG_0739.JPG',
  'IMG_0740.JPG',
  'IMG_0741.JPG',
  'IMG_0743.JPG',
  'IMG_0744.JPG',
  'IMG_0745.JPG',
  'IMG_0746.JPG',
  'IMG_0747.JPG',
  'IMG_0748.JPG',
  'IMG_0749.JPG',
  'IMG_0750.JPG',
  'IMG_0751.JPG',
  'IMG_0752.JPG',
  'IMG_0753.JPG',
  'IMG_0755.JPG',
  'IMG_0756.JPG',
  'IMG_0757.JPG',
  'IMG_0758.JPG',
  'IMG_0759.JPG',
  'IMG_0760.JPG',
  'IMG_0761.JPG',
  'IMG_0763.JPG',
  'IMG_0764.JPG',
  'IMG_0765.JPG',
  'IMG_0766.JPG',
  'IMG_0767.JPG',
  'IMG_0768.JPG',
  'IMG_0769.JPG',
  'IMG_0770(1).JPG',
  'IMG_0770.JPG',
  'IMG_0771.JPG',
  'IMG_0772(1).JPG',
  'IMG_0772.JPG',
  'IMG_0773.JPG',
  'IMG_0774.JPG',
  'IMG_0775.JPG',
  'IMG_0776.JPG',
  'IMG_0777.JPG',
  'IMG_0778.JPG',
  'IMG_0779.JPG',
  'IMG_0780.JPG',
  'IMG_0781.JPG',
  'IMG_0782.JPG',
  'IMG_0783.JPG',
  'IMG_0784.JPG',
  'IMG_0785.JPG',
  'IMG_0786.JPG',
  'IMG_0787.JPG',
  'IMG_0788.JPG',
  'IMG_0789.JPG',
  'IMG_0790.JPG',
  'IMG_0791.JPG',
  'IMG_0792.JPG',
  'IMG_0793.JPG',
  'IMG_0794.JPG',
  'IMG_0795.JPG',
  'IMG_0796.JPG',
  'IMG_0797.JPG',
  'IMG_0798.JPG',
  'IMG_0799.JPG',
  'IMG_0800.JPG',
  'IMG_0801.JPG',
  'IMG_0802.JPG',
  'IMG_0804.JPG',
  'IMG_0805.JPG',
  'IMG_0806.JPG',
  'IMG_0808.JPG',
  'IMG_0809.JPG',
  'IMG_0810.JPG',
  'IMG_0811.JPG',
  'IMG_2074.JPG',
  'IMG_2080.JPG',
  'IMG_2081.JPG',
  'IMG_2084.JPG',
  'IMG_2085.JPG',
  'IMG_2088.JPG',
  'IMG_2090.JPG',
  'IMG_2091.JPG',
  'IMG_2092.JPG',
  'IMG_2094.JPG',
  'IMG_2097.JPG',
  'IMG_2100.JPG',
  'IMG_2101.JPG',
  'IMG_2102.JPG',
  'IMG_2105.JPG',
  'IMG_2106.JPG',
  'IMG_5595(1).JPG',
  'IMG_5595.JPG',
  'IMG_5600(1).JPG',
  'IMG_5600.JPG',
  'IMG_5612(1).JPG',
  'IMG_5612.JPG',
  'IMG_5613(1).JPG',
  'IMG_5613.JPG',
  'IMG_5615(1).JPG',
  'IMG_5615.JPG',
  'IMG_5617(1).JPG',
  'IMG_5617.JPG',
  'IMG_5626(1).JPG',
  'IMG_5626.JPG',
  'IMG_5628(1).JPG',
  'IMG_5628.JPG',
  'IMG_5632(1).JPG',
  'IMG_5632.JPG',
  'IMG_5635(1).JPG',
  'IMG_5635.JPG',
  'IMG_5636(1).JPG',
  'IMG_5636.JPG',
  'IMG_5643(1).JPG',
  'IMG_5643.JPG',
  'IMG_5660.JPG',
  'IMG_5662.JPG',
  'IMG_5667.JPG',
  'IMG_5669.JPG',
  'IMG_5670.JPG',
  'IMG_5672.JPG',
  'IMG_5675.JPG',
  'IMG_5676.JPG',
  'IMG_5677.JPG',
  'IMG_5680.JPG',
  'IMG_5683.JPG',
  'IMG_5684.JPG',
  'IMG_5686.JPG',
  'IMG_5687.JPG',
  'IMG_5688.JPG',
  'IMG_5692.JPG',
  'IMG_5697.JPG',
  'IMG_5701.JPG',
  'IMG_5703.JPG',
  'IMG_5707.JPG',
  'IMG_5712.JPG',
  'IMG_5717.JPG',
  'IMG_5724.JPG',
  'IMG_5727.JPG',
  'IMG_5729.JPG',
  'IMG_5730.JPG',
  'IMG_5731.JPG',
  'IMG_5733.JPG',
  'IMG_5734.JPG',
  'IMG_5735.JPG',
  'IMG_5738.JPG',
  'IMG_5740.JPG',
  'IMG_5743.JPG',
  'IMG_5744.JPG',
  'IMG_5747.JPG',
  'IMG_5749.JPG',
  'IMG_5753.JPG',
  'IMG_5757.JPG',
  'IMG_5759.JPG',
  'IMG_5760.JPG',
  'IMG_5762.JPG',
  'IMG_5763.JPG',
  'IMG_5766.JPG',
  'IMG_5768.JPG',
  'IMG_5770.JPG',
  'IMG_5773.JPG',
  'IMG_5775.JPG',
  'IMG_5776.JPG',
  'IMG_5778.JPG',
  'IMG_5796.JPG',
  'IMG_5801.JPG',
  'IMG_5803.JPG',
  'IMG_5808.JPG',
  'IMG_5809.JPG',
  'IMG_5811.JPG',
  'IMG_5812.JPG',
  'IMG_5814.JPG',
  'IMG_5825(1).JPG',
  'IMG_5825.JPG',
  'IMG_5828.JPG',
  'IMG_5829.JPG',
  'IMG_5830.JPG',
  'IMG_5834.JPG',
  'IMG_5835.JPG',
  'IMG_5837.JPG',
  'IMG_5838.JPG',
  'IMG_5840.JPG',
  'IMG_5841.JPG',
  'IMG_5842.JPG',
  'IMG_5843.JPG',
  'IMG_5844.JPG',
  'IMG_5846.JPG',
  'IMG_5850.JPG',
  'IMG_5851.JPG',
  'IMG_5852.JPG',
  'IMG_5855.JPG',
  'IMG_5858.JPG',
  'IMG_5862.JPG',
  'IMG_5865.JPG',
  'IMG_5867.JPG',
  'IMG_5869.JPG',
  'IMG_5871.JPG',
  'IMG_5872.JPG',
  'IMG_5876.JPG',
  'IMG_5878.JPG',
  'IMG_5882.JPG',
  'IMG_5884.JPG',
  'IMG_5886.JPG',
  'IMG_5888.JPG',
  'IMG_5889.JPG',
  'IMG_5890.JPG'
];

    photos.forEach((url)=>{ 
        document.getElementById('photo-ul').innerHTML += '<li><img data-src="https://mis.icone.g12.br/galeria/segundaedicao/' + url + '" alt="" class="photo" id="picture-' + url + '"></li>'
    })

// Exibir os links no console


  function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
  
    images.forEach(image => {
      if (image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0 && getComputedStyle(image).display !== 'none') {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.removeAttribute('data-src');
      }
    });
  }
  
  window.addEventListener('scroll', lazyLoad);
  window.addEventListener('resize', lazyLoad);
  window.addEventListener('orientationchange', lazyLoad);
  
  // Carrega as imagens que já estão visíveis na página inicialmente
  lazyLoad();
  
//Expandir foto
  document.getElementById('photo-ul').addEventListener('click', (e)=>{
    if(e.target.id.indexOf('picture-') == -1){

    }else{
        document.getElementById('openned-photo').src = e.target.id.replace('picture-', '')
        document.getElementById('black-background').style.display = 'flex'
    }

  })

  //fechar foto
  document.getElementById('black-background').addEventListener('click', (e)=>{
    if(e.target.id == 'openned-photo'){

    }else{
        document.getElementById('black-background').style.display = 'none'
    }
    
  })

  //retornar para a galeria
  document.getElementById('return').addEventListener('click', ()=>{
    window.location.assign('./../')
  })



