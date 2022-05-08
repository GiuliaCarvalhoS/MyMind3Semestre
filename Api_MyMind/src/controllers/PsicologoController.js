

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
        anoDeFormacao, 
        instituicaoEnsino,
        nomeUsuario, 
        senhaUsuario,
        dataNascimento,

        
      } = request.body

      const psi = psicologos.findIndex( psicologo => psicologo.cpf === cpf || psicologo.nomeUsuario === nomeUsuario)
      
      if(psi < 0){

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

      await knex("psicologo").where({nomeUsuario}).del()

      return response.send(`${nomeUsuario}, deletado com sucesso`)
      
    } catch (error) {
      next(error)
    }
   }
  
  
}