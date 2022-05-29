const headerProfile = ()=>{
  return `
  <div class = 'container mdl-cell mdl-cell--6-col'>
        <div class= 'headerProfile-img'> </div>
        <div class= 'headerProfile-content'> 
            <h1> oiiiiii </h1>
        </div>

  </div>
  
  
  `
}


const $root = document.querySelector('#root')

const $headerProfile = headerProfile()



$root.insertAdjacentHTML("beforeend",$headerProfile)  