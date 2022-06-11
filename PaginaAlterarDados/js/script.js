function Caracter_invalido(){
  var texto = document.getElementById("teste")
  var teste = texto.value;
  var string_array = [teste.split("")];
  var chars_invalidos = [",","=","/","(",")","*","'"];
  console.log(chars_invalidos)
  console.log(string_array)
  for(var i = 0; i < string_array.length; i++){
      for(var c = 0; c < chars_invalidos.length; c++){
        if (chars_invalidos[c] == string_array[i]){
          window.alert("Erro")
          i++
          c++
          console.log("1")
        }else if(string_array[i] != chars_invalidos[i]){
          console.log("0")
          i++
          c++
          console.log(string_array[i])
      }
    }
  }
}

function habilitarTelefone() {
    document.getElementById("telefone").disabled = false;
}
function habilitarNome() {
  document.getElementById("nome").disabled = false;
}
function habilitarEmail() {
    document.getElementById("email").disabled = false;
}
function habilitarCep(){
    document.getElementById("cep").disabled = false;
}
function habilitarCidade(){
    document.getElementById("cidade").disabled = false;
}
function habilitarBairro(){
    document.getElementById("bairro").disabled = false;
}
function habilitarRua(){
    document.getElementById("rua").disabled = false;
}
function habilitarNumero(){
    document.getElementById("numeroclinica").disabled = false;
}
function habilitarComplemento(){
    document.getElementById("complemento").disabled = false;
}
function habilitarUsuario(){
    document.getElementById("usuario").disabled = false;
}
function habilitarSenha(){
    document.getElementById("senha").disabled = false;
}

const $nome = document.getElementById("nome")

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
const $usuario = document.getElementById("usuario")

$usuario.addEventListener('blur',()=>{
  
  const inputUsuario = $usuario.value


  

  
  if(inputUsuario.length < 4){
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




