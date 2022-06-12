
import cardPublication from '../cardPublication/index.js'

console.log("oi") 


//como cada funcção retonrna um html é preciso executala e armazar seu retorno em uma variavel

// const data = await fetch("http://127.0.0.1:3333/feed").then(feed => feed.json()).then(data=>{

//   debugger
//   const $data = data 
//   if(!$data){

//     $data =[{titulo:"teste",texto:"pudim", imagem:"#"}]
//     return $data
//   }else{
//     return $data
//   }
 
// }) 

function acessar(){

  
  const nomeUsuario =  document.getElementById('usuario').value
  const senhaUsuario = document.getElementById('senha').value
        
const body  = {

  nomeUsuario,
  
	senhaUsuario
}

const data = await fetch("http://127.0.0.1:3333/login",

{
  method : 'POST',
  headers: {'Content-Type':'application/json'}, 
  body: JSON.stringify(body),
}


).then(feed => feed.json()).then(data=>{

  debugger
  const $data = data 
  if(!$data){

    $data =[{titulo:"teste",texto:"pudim", imagem:"#"}]
    return $data
  }else{
    return $data
  }
 
}) 
const caminho = "./PaginaFeed/FeedPsicologo.html"


window.location.assign(caminho)



}



const $cardPublication = cardPublication(data)



 const main = ()=>{


  return `
  
  
    <main>
    
      
      ${$cardPublication}
        
    </main>

  
  
  

  `
}

export default main

