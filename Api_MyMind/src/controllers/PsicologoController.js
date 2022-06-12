

const knex = require('../database')
const bcrypt= require('bcryptjs')

const {v4: uuidv4} = require('uuid')


module.exports = {

  //Get
  async index(request, response, next){
      try {
        const resultados = await  knex("psicologo")
        return response.json(resultados)
        
      } catch (error) {
        next(error)
      }
     
   },

   //Post
   async create(request, response, next){
 
     try{


      try {
        var psicologos = await  knex("psicologo")
      } catch (error) {
        var psicologos = []
      }

      
 
       const {
        cpf,
        nome,
        cidade,
        cep,
        rua,
        bairro,
        numero,
        complemento,
        telefone,
        crp, 
        email,
        linkEpsi,
        anoDeFormacao, 
        instituicaoEnsino,
        nomeUsuario, 
        senhaUsuario,
        dataNascimento,

        
      } = request.body

      const psi = psicologos.findIndex( psicologo => psicologo.cpf === cpf || psicologo.nomeUsuario === nomeUsuario)


       
      
      if(psi < 0){
        
        const hash = await bcrypt.hash(senhaUsuario, 10)

        await knex('psicologo').insert({
          id:uuidv4(),
          cpf,
          nome,
          dataNascimento,
          cidade,
          cep,
          rua,
          bairro,
          numero,
          complemento,
          email,
          telefone,
          crp,
          linkEpsi,
          anoDeFormacao,
          instituicaoEnsino,
          nomeUsuario,
          senhaUsuario:hash,
         })
 
         return response.status(201).send("Usuario cadastrado com sucesso")

      }

      else{
        return response.status(201).send("Usuario ja cadastrado")
      }

      
 
 
     }catch (error){
       next(error)
     }
 
     
   },

   //Put

   async update(request, response, next){
    try {

      // nome,usuario,senha, endereco,telefone, email
      const alteracaoPsicologo = request.body

      const {nomeUsuario} = request.params
      
      
      
      await knex("psicologo").update({
          nome: alteracaoPsicologo.nome, 
          email: alteracaoPsicologo.email,
          telefone: alteracaoPsicologo.telefone,
          senhaUsuario: alteracaoPsicologo.senhaUsuario,
          cidade: alteracaoPsicologo.cidade,
          cep: alteracaoPsicologo.cep,
          rua: alteracaoPsicologo.rua,
          bairro: alteracaoPsicologo.bairro,
          numero: alteracaoPsicologo.numero,
          complemento: alteracaoPsicologo.complemento,
      }).where({nomeUsuario})
      
      return response.send(`${nomeUsuario}, Atualizado com sucesso`)
      
    } catch (error) {
      next(error)
    }
   },



   async delete(request,response, next){

    try {

      const {nomeUsuario}= request.params
      const {senhaUsuario} = request.body

      const psicologos = await  knex("psicologo") //psicologos cadastrados
      
      // const psi = psicologos.findIndex( psicologo => psicologo.nomeUsuario === nomeUsuario && psicologo.senhaUsuario === senhaUsuario)

      const user = psicologos.find(psicologo => psicologo.nomeUsuario === nomeUsuario) //encontra o usuario especifico


      //Verifica se as senhas batem
      if(!await bcrypt.compare(senhaUsuario,user.senhaUsuario)){

        return response.send("Houve algum problema")


        
      }else {
        
        await knex("psicologo").where({nomeUsuario}).del()

        return response.send(`${nomeUsuario}, deletado com sucesso`)
        
      }

      
      
    } catch (error) {
      next(error)
    }
   },
   async retornaPsi(request, response, next){
    try {
      const {nomePsicologo, cidade} = request.body
      const psicologos = await  knex("psicologo") 
      const ind = psicologos.findIndex(psicologo => psicologo.nome === nomePsicologo || psicologo.cidade === cidade) 
      
      if (ind == -1){
        return response.json({resposta:"Psicólogo não encontrado"})
      }
      else{
        if (!cidade){
          const user = psicologos.find(psicologo => psicologo.nome === nomePsicologo)
          
          return response.json({nome : user.nome, email : user.email , telefone : user.telefone})
        }
        else if (!nomePsicologo) {
          const user = psicologos.find(psicologo => psicologo.cidade === cidade)
          return response.json({nome : user.nome, email : user.email , telefone : user.telefone})
        }
        else{
          const user = psicologos.find(psicologo => psicologo.cidade === cidade && psicologo.nome === nomePsicologo)
          return response.json({nome : user.nome, email : user.email , telefone : user.telefone})
        }
      }
      
    } catch (error) {
      next(error)
    }
   
 }
  
  
}