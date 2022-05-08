

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


      const psicologos = await  knex("psicologo")

      
 
       const {
        id,
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
        anoDeFormação, 
        nomeUsuario, 
        senhaUsuario,
        dataNascimento,

        
      } = request.body

      psicologos.indexOf(psicologo => psicologo.nomeUsuario || psicologo.cpf)
      
      if(psicologos > 0){

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
          anoDeFormação,
          nomeUsuario,
          senhaUsuario
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
        endereco: alteracaoPsicologo.endereco, // Conversar com a professora
        email: alteracaoPsicologo.email,
        telefone: alteracaoPsicologo.telefone,
        nomeUsuario: alteracaoPsicologo.nomeUsuario,
        senhaUsuario: alteracaoPsicologo.senhaUsuario
      }).where({nomeUsuario})
      
      return response.send(`${nomeUsuario}, Atualizado com sucesso`)
      
    } catch (error) {
      next(error)
    }
   },

   async delete(request,response, next){

    try {

      const {nomeUsuario}= request.params

      await knex("psicologo").where({nomeUsuario}).del()

      return response.send(`${nomeUsuario}, deletado com sucesso`)
      
    } catch (error) {
      next(error)
    }
   }
  
  
}