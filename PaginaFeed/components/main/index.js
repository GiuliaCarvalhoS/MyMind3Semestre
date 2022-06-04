
import cardPublication from '../cardPublication/index.js'

//como cada funcção retonrna um html é preciso executala e armazar seu retorno em uma variavel

const $cardPublication = cardPublication()


 const main = ()=>{


  return `
  
  <div class="mdl-layout__content">
    <main>
    
      
      ${$cardPublication}
        
    </main>

  
  
  </div>

  `
}

export default main

