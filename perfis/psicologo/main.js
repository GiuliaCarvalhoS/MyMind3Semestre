import headerProfileContent from '../components/headerProfileContent/index.js'



const date = await fetch("http://localhost:3333/psicologos").then( response => response.json() )









// const $headerProfileContent = headerProfileContent(date)


const headerProfile = ()=>{

  
  
  return `
  <div class = 'container mdl-cell mdl-cell--6-col'>
        <div class= 'headerProfile-img'> </div>
        <div class= 'headerProfile-content'> 

        ${
          `
          
          <div class = 'headerProfileContent-follow'>
            <button id= 'btn-seguir'class= 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' > seguir </button>
           </div>
          <div class ='headerProfileContent-containerInfo'>
             <span class = 'headerProfileContent-name'> ${date[0].nome} </span>
            <span class = 'headerProfileContent-user'> ${date[0].nomeUsuario} </span>
            <span class = 'headerProfileContent-description'> aqui fica a descrição do perfil </span>

              
            </div>

            </br>
            </br>
            </br>
            </br>
            </br>
          
          `
        }
            
        ${
          date.map(perfil =>{
            return `

            
	



            <div class="container">
				
            <div class="container-header">
              
            </div>
            
          
            <div class="container-feed">
  
              <div class="container-input">
              
              </div>
              <a href="../../PerfilDoPaciente/perfildopsicologoo.html"><button  class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"  id="btn-dados" class="btn-dados">  Meus Dados </button></a>
              <div class="contente1 blue">
  
  
                <div class="titulo">
                  <span>${perfil.nomeUsuario}</span>
                  
                    
          
                </div>
            
  
                <div class="conteudoPublicação">
                  <p> Sem dúvida, um desejo está ali presente porque houve a interdição. ... Um desejo pode ser suscitado pela proibição. Em Freud, o desejo, que é inconsciente, é designado pelo vocábulo alemão Wunsch, cuja tradução é anelo, aspiração. </p>
                
                </div>
                                                   
  
              </div>
        
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="btn-curtir" class="btn-curtir"> 	&#9825;  Curtir </button>
  
              
  
      </div>
          	`
          })
        }

           
        </div>

  </div>
  
  
  `
}


const $root = document.querySelector('#root')

const $headerProfile = headerProfile()



$root.insertAdjacentHTML("beforeend",$headerProfile)  