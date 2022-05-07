

const knex = require('../database')

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
 
       const {
        id,
        cpf,
        nome,
        endereco,
        telefone,
        crp, 
        email,
        linkEpsi,
        anoDeFormação, 
        nomeUsuario, 
        senhaUsuario,
        dataNascimento,

        
      } = request.body
         await knex('psicologo').insert({
          id:uuidv4(),
          cpf,
          nome,
          dataNascimento,
          endereco,
          email,
          telefone,
          crp,
          linkEpsi,
          anoDeFormação,
          nomeUsuario,
          senhaUsuario
         })
 
         return response.status(201).send()
 
 
 
 
 
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
          endereco: alteracaoPsicologo.endereco, // Conversar com a professora
          email: alteracaoPsicologo.email,
          telefone: alteracaoPsicologo.telefone,
          nomeUsuario: alteracaoPsicologo.nomeUsuario,
          senhaUsuario: alteracaoPsicologo.senhaUsuario
      }).where({nomeUsuario})
      return response.sed()
      
    } catch (error) {
      next(error)
    }
   },

   async delete(request,response, next){

    try {

      const {cpf}= request.params

      await knex("psicologo").where({nomeUsuario}).del()

      return response.send()
      
    } catch (error) {
      next(error)
    }
   }
  
  
}