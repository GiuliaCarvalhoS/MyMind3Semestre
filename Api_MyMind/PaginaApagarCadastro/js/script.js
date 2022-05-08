const $usuario = document.getElementById("usuario")

$usuario.addEventListener('blur',()=>{
  
  const inputUsuario = $usuario.value


  

  
  if(inputUsuario.length < 5){
    $usuario.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-deletar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-usuario").style.display ='flex'
  }
  //retorna ao normal
  else{
    $usuario.style.borderColor = "green"
    document.getElementById('btn-deletar').disabled=false
    document.querySelector("#erro-usuario").style.display ='none'
  }

  

})
const $senha = document.getElementById("senha")

$senha.addEventListener('blur',()=>{
  
  const inputUsuario = $senha.value


  

  
  if(inputUsuario.length < 5){
    $senha.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-deletar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-senha").style.display ='flex'
  }
  //retorna ao normal
  else{
    $senha.style.borderColor = "green"
    document.getElementById('btn-deletar').disabled=false
    document.querySelector("#erro-senha").style.display ='none'
  }

  

})