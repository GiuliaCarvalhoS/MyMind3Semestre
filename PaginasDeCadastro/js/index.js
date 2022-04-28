
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
$btnEntrar.addEventListener('click',()=>{
  
  const usuarios = JSON.parse(localStorage.getItem("usuarios"))

  
  
  const usuarioDigitado = $usuario.value
  const senhaDigitada = $senha.value
    

  try{
    var usuario = usuarios.findIndex((usuario)=>usuario.user === usuarioDigitado && usuario.password === senhaDigitada)

  }catch(error){
    var usuario = -1
  }
  
  if(usuario >= 0 ){
    
    $senhaInvalida.style.display= 'none'
    
    
    usuarios[usuario].loged = true
    
    window.localStorage.setItem("usuarios",JSON.stringify(usuarios))
  
    //const caminho = '.././Interno/Paciente/perfilPaciente.html'
    

    window.location.assign(caminho)

    

  }else{
    $senhaInvalida.style.display= 'block'
    
    
    
  }
})

//Cadastrar

$btnCadastrar.addEventListener('click',()=>{
  window.location.assign("../PacienteCadastro.html")
})