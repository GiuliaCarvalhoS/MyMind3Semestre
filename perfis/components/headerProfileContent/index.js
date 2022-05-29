const headerProfileContent = (date)=>{
    
	date.map(perfil =>{

        
        return`
        <div class = 'headerProfileContent-follow'>
            <button id= 'btn-seguir'class= 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' > seguir </button>
        </div>
        <div class ='headerProfileContent-containerInfo'>
            <span class = 'headerProfileContent-name'> ${perfil.nome} </span>
            <span class = 'headerProfileContent-user'> ${perfil.nomeUsuario} </span>
            <span class = 'headerProfileContent-description'> Descrição </span>
        </div>
	`
    })
}

export default headerProfileContent