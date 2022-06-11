let formData = new FormData()




// TESTANDO CONVERSO DE ARQUIVOco
const teste = async (te)=>{



  const $arquivoInput = document.getElementById("files")

  // const merda = JSON.stringify(te.target.files[0])
   
  // console.log(`teste: ${merda}`)

  $arquivoInput.addEventListener('change', event => {

    
    formData.append("file",event.target.files[0])

    
      

    



  })






}






// __________________________________________



function cadastrar(event){

  
  event.preventDefault()

  debugger
  const url = "http://127.0.0.1:3333/publicar"

  const $texto = document.getElementById('textoPublicacao').value
  const $titulo = document.getElementById('tituloPublicacao').value


  const body ={
    "texto": $texto,
    "titulo":$titulo
  }


  
  
  fazpost(url, body, )


  
}
  
function fazpost(url, body,file){

  const req = new XMLHttpRequest()
  req.open("POST", url, true)
  
  req.setRequestHeader('Content-type', 'application/json')
  

  req.send(JSON.stringify(body))
  
  req.send(formData)

  

  req.onload = function(){

    window.alert(this.responseText)
    console.log(this.responseText)

    

  }

  return req.responseText

}





// function validarArquivo(arquivoInput, caminhoArquivo){
  

//   const extensoesPermitidas = /(.jpg|.jpeg|.png|.gif)$/i;

//   if(!extensoesPermitidas.exec(caminhoArquivo)){
//       window.alert('Por favor envie um arquivo que tenha as extensões.jpeg/.jpg/.png/.gif .');
//       return false;
//   }
//   else{
//     if (arquivoInput.files && arquivoInput.files[0]) {

//       const merda = JSON.stringify(arquivoInput.files)
//       const merda2 = JSON.stringify(arquivoInput.files[0])
//       console.log(`arquivoInput.files: ${merda}`)
//       console.log(`arquivoInput.files[0]: ${merda2}`)

      

//       // fazer leitura do arquivo
//         // const reader = new FileReader();
//         // reader.onload = function(e) {
//         //     document.getElementById('visualizarImagem').innerHTML = '';
//         // };
//         // reader.readAsDataURL(arquivoInput.files[0]);}
//         return true 
//     }
//     else{
//       console.log("deu erro aki")
//       return false
//     }
          
      
//   }
// }