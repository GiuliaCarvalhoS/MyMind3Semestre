
import cardPublication from '../cardPublication/index.js'






  
  const data = await fetch("http://127.0.0.1:3333/feed",
).then(feed => feed.json()).then(data=>{

  
  const $data = data 
  if(!$data){

    $data =[{titulo:"teste",texto:"pudim", imagem:"#"}]

    
    return $data
  }else{
    return $data

    
  }
 
}) 













const $cardPublication = cardPublication(data)



 const main = ()=>{


  return `
  
  
    <main>
    
      
      ${$cardPublication}
        
    </main>

  
  
  

  `
}

export default main

