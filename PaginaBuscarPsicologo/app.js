let recebe = {}
const inputNome = document.getElementById("buscarPsicologo")
const inputCidade = document.getElementById("buscarCidade")


inputNome.addEventListener('blur',()=>{
  const nomePsicologo = document.getElementById("buscarPsicologo").value
  if(nomePsicologo.length == 0){
    inputNome.style.border = "2px solid red"    //muda a borda para vermelho
    document.getElementById('buscarBtn').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-nome").style.display ='flex'
  }
  else{
    inputNome.style.border = "2px solid green"
    document.getElementById('buscarBtn').disabled=false
    document.querySelector("#erro-nome").style.display ='none'
  
  }
})


inputCidade.addEventListener('blur',()=>{
  const cidade = document.getElementById("buscarCidade").value
  if(cidade.length < 1){
    inputCidade.style.border = "2px solid red" //muda a borda para vermelho
    document.getElementById('buscarBtn').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-nome").style.display ='flex'
  }
  else{
    document.getElementById('buscarBtn').disabled=false
    document.querySelector("#erro-nome").style.display ='none'
    inputCidade.style.border = "2px solid green"
  
  }
})
const funcao = async (event) => { 
  //retorna ao norma
  const nomePsicologo = document.getElementById("buscarPsicologo").value
  const cidade = document.getElementById("buscarCidade").value
  
    event.preventDefault()
    const vaziodic = vazio(recebe)
    console.log(vaziodic)
     if (!vaziodic){
         location.reload()
     }
    

    
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
        if (!fet.resposta){
          return `
          <div class="infoPsi">
          <p class"info">${fet.nome}<p>
          <p class"info">${fet.telefone}<p>
          <p class"info">${fet.email}<p>
          </div> 
          `
        
      }
      else{
        return `
        <div class="infoNaoEncontrado">
        <p class"info">${fet.resposta}<p>
        </div> 
        `
      }
   }
    
    
    
    const $root = document.querySelector('#root') // selecionar a div root no feedPsicologo.html
    
    const $app = app(recebe)//como cada funcção retonrna um html é preciso executala e armazar seu retorno em uma variavel
    
    
    
    
    
    //aqui só diz onde irei inserir o codigo html
    $root.insertAdjacentHTML("beforeend",$app) 
   
  }

