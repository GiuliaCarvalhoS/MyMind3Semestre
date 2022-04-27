const novoUsuario = [] //array que armazenrara provisoriamente os dados do usuario











function cadastrar(){
  

  //dados
  const $nomeCompletoValue = document.getElementById("nomeCompleto").value
  const $dataNascimentoValue = document.getElementById("dtnasc").value
  const $telefoneValue = document.getElementById("telefone").value
  const $emailValue = document.getElementById("email").value
  const $cpfValue = document.getElementById("cpf").value
  const $tempo = document.getElementById("tempo")
  const $tempoValue = $tempo.options[$tempo.selectedIndex].text
  const $comoNosConheceu = document.getElementById("comoNosConheceu")
  const $comoNosConheceuValue = $comoNosConheceu.options[$comoNosConheceu.selectedIndex].text
  const $user = document.getElementById("user")
  const $senha = document.getElementById("senha").value
 


  
  
  
  

  
    
  const dadosUsuario =
  {
    nome:$nomeCompletoValue,
    data:$dataNascimentoValue,
    telefone:$telefoneValue,
    email: $emailValue,
    cpf: $cpfValue,
    acompanhamento_psicológico: $tempoValue,
    ComoNosConheceu: $comoNosConheceuValue,
    user: $user.value,
    password: $senha, 
    loged:false

  }
 

  novoUsuario.push(dadosUsuario)

  const usuariosA = JSON.parse(localStorage.getItem("usuarios")) ||[]
  

  const usuarios = [...usuariosA, ...novoUsuario]
    
    
  
    window.localStorage.setItem("usuarios",JSON.stringify(usuarios))

  
  
  
 



  
}

//botão cadastrar
const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=> cadastrar())


// confirmação de senha

const $btnConfirmarSenha = document.getElementById("confSenha")

$btnConfirmarSenha.addEventListener('blur',()=>{

 
  const $senha = document.getElementById("senha").value

  const $senhaConfirmacao = document.getElementById("confSenha").value
  
  if($senha === $senhaConfirmacao ){
    $btnConfirmarSenha.style.borderColor = ''
    document.getElementById('btn-cadastrar').disabled = false
  }
  else{
    $btnConfirmarSenha.style.borderColor = 'red'
    document.getElementById('btn-cadastrar').disabled = true
  }
})


//verificação de usuario cadastrado
const $user = document.getElementById("user")

$user.addEventListener('blur',()=>{
  
  const inputUsuario = $user.value

  console.log(inputUsuario)
  const usuariosA = JSON.parse(localStorage.getItem("usuarios"))



 
  

  const usuarioExistente = usuariosA.findIndex(({user})=> user == inputUsuario )
  console.log(usuarioExistente)

  if(usuarioExistente >= 0 || inputUsuario.length < 3){
    $user.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-usuario").style.display ='flex'
  }
  //retorna ao normal
  else{
    $user.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-usuario").style.display ="none"
  }

  

})

// verificação do campo nome 

const $nome = document.getElementById("nomeCompleto")

$nome.addEventListener('blur',()=>{
  
  const inputUsuario = $nome.value


  

  
  if(inputUsuario.length <= 1 ){
    $nome.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-nome").style.display ='flex'

  }
  //retorna ao normal
  else{
    $nome.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-nome").style.display ='none'
  }

  

})




// verificação do campo data

const $data = document.getElementById("dtnasc")

$data.addEventListener('blur',()=>{
  
  const inputUsuario = $data.value


  

  
  if(inputUsuario.length <= 7){
    $data.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-data").style.display ='flex'
  }
  //retorna ao normal
  else{
    $data.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled="none"
    document.querySelector("#erro-data").style.display ='none'
  }

  

})



// verificação do campo numero de telefone

const $numeroDeTelefone = document.getElementById("telefone")

$numeroDeTelefone.addEventListener('blur',()=>{
  
  const inputUsuario =parseInt($numeroDeTelefone.value)


  

  
  if(inputUsuario.toString().length <= 10){
    $numeroDeTelefone.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-numero").style.display ='flex'
    
  }
  //retorna ao normal
  else{
    $numeroDeTelefone.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-numero").style.display ="none"
  }

  

})




// verificação do campo e-mail

const $email = document.getElementById("email")



$email.addEventListener('blur',()=>{
  
  const inputUsuario = $email.value
  

  usuario = inputUsuario.substring(0,  inputUsuario.indexOf("@"));
  dominio =  inputUsuario.substring( inputUsuario.indexOf("@")+ 1,  inputUsuario.length);

  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) 
      {

        $email.style.borderColor = "green"
        document.getElementById('btn-cadastrar').disabled=false
        document.querySelector("#erro-email").style.display ='none'
      }
  else{
    $email.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-email").style.display ='flex'
  }
  

 

  

})


// verificação do campo CPF

const $cpf = document.getElementById("cpf")

$cpf.addEventListener('blur',()=>{
  
  const inputUsuario = $cpf.value


  

  
  if(inputUsuario.length <= 10){
    $cpf.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-cpf").style.display ='flex'
  }
  //retorna ao normal
  else{
    $cpf.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-cpf").style.display ='none'
  }

  

})