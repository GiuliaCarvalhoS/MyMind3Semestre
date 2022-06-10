// TESTANDO CONVERSO DE ARQUIVOco
const teste = (te)=>{
  const $arquivoInput = document.getElementById("files")

  // const merda = JSON.stringify(te.target.files[0])
   
  // console.log(`teste: ${merda}`)

  $arquivoInput.addEventListener('change', event => {

    console.log(event.target.files[0])
    

    const data = new FormData()
    data.append('file', event.target.files[0])

    console.log(data)

})



  // const teste = validarArquivo($arquivoInput, $caminhoArquivo)

  // console.log(teste)
}






// __________________________________________



  function cadastrar(event){

    
    event.preventDefault()

    
    const url = "http://127.0.0.1:3333/publicar"

    

    

    console.log($arquivoInput)


   const $arquivoValido = validarArquivo($arquivoInput,$caminhoArquivo)

    
  
  
  
    const body = {
      "titulo": nome,
      "texto": nascimento,
      "img": $arquivoValido ? arquivoInput.files : '' ,

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

      const merda = JSON.stringify(arquivoInput.files)
      const merda2 = JSON.stringify(arquivoInput.files[0])
      console.log(`arquivoInput.files: ${merda}`)
      console.log(`arquivoInput.files[0]: ${merda2}`)

      

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