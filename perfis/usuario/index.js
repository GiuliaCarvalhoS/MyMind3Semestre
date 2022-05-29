import headerProfileContent from '../components/headerProfileContent/index.js'

const imgTest= "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=785&q=80"


const usuarios = JSON.parse(localStorage.getItem("usuarios"))


const {user, nome} = usuarios.find((usuario)=>usuario.loged === true)



const $headerProfileContent = headerProfileContent(imgTest,nome,user)



const headerProfile = ()=>{
  return `
  <div class = 'container mdl-cell mdl-cell--6-col'>
        <div class= 'headerProfile-img'> </div>
        <div class= 'headerProfile-content'> 
            ${$headerProfileContent}
        </div>

  </div>
  
  
  `
}


const $root = document.querySelector('#root')

const $headerProfile = headerProfile()



$root.insertAdjacentHTML("beforeend",$headerProfile)  