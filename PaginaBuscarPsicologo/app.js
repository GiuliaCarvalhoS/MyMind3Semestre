let recebe = {}
const funcao = async (event) => { 

    event.preventDefault()
    const vaziodic = vazio(recebe)
     console.log(vaziodic)
     if (!vaziodic){
         location.reload()
     }
    const nomePsicologo = document.getElementById("buscarPsicologo").value
    const cidade = document.getElementById("buscarCidade").value

    
    const body = {
      nomePsicologo,
      cidade
    }
    
   
    const fet = await fetch("http://127.0.0.1:3333/encontrarpsicologo",
      {
        method : 'POST',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify(body),
      }
    ).then(psicologo => psicologo.json()).then(Date => {
        var data = Date
        recebe = data
        genio(recebe)
        
    
     })
    
     
}
    
function vazio(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
    
function genio(recebe){
    const app = (fet)=>{
        return `
        <div class="infoPsi">
        <p class"info">${fet.nome}<p>
        <p class"info">${fet.telefone}<p>
        <p class"info">${fet.email}<p>
        </div> 
        `
       
    }
    
    
    
    const $root = document.querySelector('#root') // selecionar a div root no feedPsicologo.html
    
    const $app = app(recebe)//como cada funcção retonrna um html é preciso executala e armazar seu retorno em uma variavel
    
    
    
    
    
    //aqui só diz onde irei inserir o codigo html
    $root.insertAdjacentHTML("beforeend",$app) 
   
  }

