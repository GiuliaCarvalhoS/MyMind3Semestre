
const knex = require('../database')
const bcrypt= require('bcryptjs')

const {v4: uuidv4} = require('uuid')


module.exports ={

  async getPublicacao (req, res, next){

    try {

      const publicacoes = await knex("publicacao")

      return res.status(200).json(publicacoes)
      
    } catch (error) {

      next(error)
      
    }



  },

  async publicar(req, res, next){
    try{
      
      
    const publicacao= req.body

    await knex('publicacao').insert({
       id:uuidv4(),
       texto: publicacao.texto,
       titulo: publicacao.titulo

    })
    return res.status(201).send("Publição com sucesso")


    }
    catch(error){
        next(error)
        
    } 
  }


}
