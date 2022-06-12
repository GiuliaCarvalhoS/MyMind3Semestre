
const $entrar = document.getElementById("entrar")
const $modalLogin = document.getElementById('login')
const $closeButton = document.getElementById('close-button')
const $usuario = document.getElementById('usuario')
const $senha = document.getElementById('senha')
const $btnEntrar = document.getElementById('btn-entrar')
const $conatainerSenha = document.getElementById('containerSenha')
const $senhaInvalida = document.getElementById('msg-erroSenha')
const $btnCadastrar = document.getElementById("btn-cadastrarLogin")

const openModal = ()=>{
  
  $modalLogin.style.display ="block"
 
}

const closeModal = ()=>{
  $modalLogin.style.display ="none"
}


$closeButton.addEventListener('click',()=> closeModal())
$entrar.addEventListener('click', ()=> openModal())

//verificar se o usuario é cadastrado e então verificar a senha


// $btnEntrar.addEventListener('click',()=>{

 
  

  
  
// })

// //Cadastrar

// $btnCadastrar.addEventListener('click',()=>{
//   window.location.assign("../Externoo/Cadastros/cliente.html")
// })
