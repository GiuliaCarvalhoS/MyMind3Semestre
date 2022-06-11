
import headerComponent from "./components/headerComponent/index.js"
import headerPublicationComponent from './components/headerPublicationComponent/index.js'
import main from "./components/main/index.js"


//como cada funcção retonrna um html é preciso executala e armazar seu retorno em uma variavel

const $headerComponent = headerComponent()
const $headerPublicationComponent = headerPublicationComponent()


const $main = main()



//<------------------>
const app = ()=>{
  return `
    ${$headerComponent}
    
    ${$headerPublicationComponent}
    ${$main}

    
    
    
  `

   

  
}



const $root = document.querySelector('#root') // selecionar a div root no feedPsicologo.html

const $app = app()//como cada funcção retonrna um html é preciso executala e armazar seu retorno em uma variavel





//aqui só diz onde irei inserir o codigo html
$root.insertAdjacentHTML("beforeend",$app)  