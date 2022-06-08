

  function cadastrar(event){

    
    event.preventDefault()

    
    const url = "http://127.0.0.1:3333/publicar"

    const $arquivoInput = document.getElementById('arquivo')
    const $caminhoArquivo = $arquivoInput.value


   const $arquivoValido = validarArquivo($arquivoInput,$caminhoArquivo)

    if (! $arquivoValido){
      
    }
  
  
  
    const body = {
      "titulo": nome,
      "texto": nascimento,
      "img": telefone,

    }
    
    
    fazpost(url, body)
  }
  
function fazpost(url, body){

  const req = new XMLHttpRequest()
  req.open("POST", url, true)
  req.setRequestHeader('Content-type', 'application/json')

  req.send(JSON.stringify(body))

  

  req.onload = function(){

    window.alert(this.responseText)
    console.log(this.responseText)

    

  }

  return req.responseText

}





function validarArquivo(arquivoInput, caminhoArquivo){
  

  const extensoesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;

  if(!extensoesPermitidas.exec(caminhoArquivo)){
      window.alert('Por favor envie um arquivo que tenha as extensões.jpeg/.jpg/.png/.gif .');
      return false;
  }
  else{
    if (arquivoInput.files && arquivoInput.files[0]) {
      // fazer leitura do arquivo
        // const reader = new FileReader();
        // reader.onload = function(e) {
        //     document.getElementById('visualizarImagem').innerHTML = '';
        // };
        // reader.readAsDataURL(arquivoInput.files[0]);}
        return true 
    }
    else{
      console.log("deu erro aki")
      return false
    }
          
      
  }
}