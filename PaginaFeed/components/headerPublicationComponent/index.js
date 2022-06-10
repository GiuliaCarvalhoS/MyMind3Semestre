const  headerPublicationComponent = ()=>{

  return `
  <div class = "headerPublicationComponent-container">
    <div class = "headerPublicationComponent-container-card" >

      <div class = "publication-title-container">
      <input type="text" class="publication-title" placeholder="Título"> 
      </div>

      <div class="publication-text-container">
      <textarea class="publication-text" placeholder="O que você gostaria de compartilhar?"></textarea>
      </div>

      <div class="publication-footer-container">

      <input type="file" id="files" class="hidden" accept="image/*" onclick="teste(event)">
      <label for="files" class="publication-file">
      </label>
      <button class="publication-button"> Publicar </button>
      </div>
      
    </div>
</div>

  

  
  
  
  `
}

export default headerPublicationComponent