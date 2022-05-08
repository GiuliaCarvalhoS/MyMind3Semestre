
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


  

  
  if(inputUsuario.length < 6){
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


  

  
  if(inputUsuario.toString().length < 11){
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


  

  
  if(inputUsuario.length < 10){
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
const $crp = document.getElementById("crp")

$crp.addEventListener('blur',()=>{
  
  const inputUsuario = $crp.value


  
  if(inputUsuario.length < 7){
    $crp.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-crp").style.display ='flex'
  }
  //retorna ao normal
  else{
    $crp.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-crp").style.display ='none'
  }

  

})
const $link = document.getElementById("link")

$link.addEventListener('blur',()=>{
  
  const inputUsuario = $link.value


  

  
  if(inputUsuario.length < 10){
    $link .style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-link").style.display ='flex'
  }
  //retorna ao normal
  else{
    $link.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-link").style.display ='none'
  }

  

})
const $cep = document.getElementById("cep")

$cep.addEventListener('blur',()=>{
  
  const inputUsuario = $cep.value


  

  
  if(inputUsuario.length < 8){
    $cep.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-cep").style.display ='flex'
  }
  //retorna ao normal
  else{
    $cep.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-cep").style.display ='none'
  }

  

})
const $cidade = document.getElementById("cidade")

$cidade.addEventListener('blur',()=>{
  
  const inputUsuario = $cidade.value


  

  
  if(inputUsuario.length < 5){
    $cidade.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-cidade").style.display ='flex'
  }
  //retorna ao normal
  else{
    $cidade.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-cidade").style.display ='none'
  }

  

})
const $bairro = document.getElementById("bairro")

$bairro.addEventListener('blur',()=>{
  
  const inputUsuario = $bairro.value


  

  
  if(inputUsuario.length < 5){
    $bairro.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-bairro").style.display ='flex'
  }
  //retorna ao normal
  else{
    $bairro.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-bairro").style.display ='none'
  }

  

})
const $rua = document.getElementById("rua")

$rua.addEventListener('blur',()=>{
  
  const inputUsuario = $rua.value


  

  
  if(inputUsuario.length < 5){
    $rua.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-rua").style.display ='flex'
  }
  //retorna ao normal
  else{
    $rua.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-rua").style.display ='none'
  }

  

})
const $instituiçãoDeFormção = document.getElementById("instituiçãoDeFormção")

$instituiçãoDeFormção.addEventListener('blur',()=>{
  
  const inputUsuario = $instituiçãoDeFormção.value


  

  
  if(inputUsuario.length < 5){
    $instituiçãoDeFormção.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-instituicao").style.display ='flex'
  }
  //retorna ao normal
  else{
    $instituiçãoDeFormção.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-instituicao").style.display ='none'
  }

  

})
const $anoDeFormacao = document.getElementById("anoDeFormacao")

$anoDeFormacao.addEventListener('blur',()=>{
  
  const inputUsuario = $anoDeFormacao.value


  

  
  if(inputUsuario.length < 4){
    $anoDeFormacao.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-ano").style.display ='flex'
  }
  //retorna ao normal
  else{
    $anoDeFormacao.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-ano").style.display ='none'
  }

  

})
const $usuario = document.getElementById("usuario")

$usuario.addEventListener('blur',()=>{
  
  const inputUsuario = $usuario.value


  

  
  if(inputUsuario.length < 5){
    $usuario.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-usuario").style.display ='flex'
  }
  //retorna ao normal
  else{
    $usuario.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-usuario").style.display ='none'
  }

  

})
const $numeroClinica = document.getElementById("numeroclinica")

$numeroClinica.addEventListener('blur',()=>{
  
  const inputUsuario = $numeroClinica.value


  

  
  if(inputUsuario.length == 0){
    $numeroClinica.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
    document.querySelector("#erro-numeroclinica").style.display ='flex'
  }
  //retorna ao normal
  else{
    $numeroClinica.style.borderColor = "green"
    document.getElementById('btn-cadastrar').disabled=false
    document.querySelector("#erro-numeroclinica").style.display ='none'
  }

  

})


