


export const cardPublication = (publicacoes)=>{
  return `
    ${publicacoes.map(publicacao =>`
    <div class="container-conteudo-card">
    <div class="container-header-card">
      <p class="titulo-header">${publicacao.titulo}</p>
      <p class="usuario-card">@lucas</p>
    </div>

    
      ${!(publicacao.imagem === '') 
        ? `
        <div class="container-img-card">
            <img src="../../../Api_MyMind/tmp/uploads/${publicacao.imagem}" alt="" class="img-publi">
        </div>  
            `
        

            
        : `
            
      
            
          `
      }

    

    <div class="container-txt-card">
      <p>${publicacao.texto}</p>
    </div>

    <div class="container-footer-card">
      <div class="footer-img-card-heart">
      </div>
      <div class="footer-img-card-comment">
      
      </div>
      <div class="footer-img-card-share">
      
      </div>
    </div>
    
  </div>
    
    
    `)}
  
  
  `
}

export default cardPublication
