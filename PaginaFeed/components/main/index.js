
import cardPublication from '../cardPublication/index.js'

//como cada funcção retonrna um html é preciso executala e armazar seu retorno em uma variavel

const [{titulo,texto}] = await fetch("http://127.0.0.1:3333/feed").then(feed => feed.json()).then(data=>{
  const $data = data
  return $data
})


console.log(titulo,texto)

const $cardPublication = cardPublication(titulo,texto)


 const main = ()=>{


  return `
  
  
    <main>
    
      
      ${$cardPublication}
        
    </main>

  
  
  

  `
}

export default main

