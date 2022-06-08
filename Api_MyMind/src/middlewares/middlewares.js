
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

module.exports = {

  async notFound(req, res, next){
    const error = new Error('Not found') 
    error.status = 404
  
    next(error)
  },

  async catchAll(error, req, res, next){
    res.status(error.status || 500)
    res.json({error: error.message})
  },

  async auth(req, res, next){
    const authHeader = req.headers.authorization

    

    if(!authHeader){
      return res.status(401).send({error: "Sem token"})
    }

    const partes = authHeader.split(' ')

    if(! partes.lenght === 2){
      return res.status(401).send({error: "Token erro"})
    }

    const [schema, token] = partes

    if(!/^Bearer$/i.test(schema)){
      return res.status(401).send({error: "token mal formado"})
    }

    jwt.verify(token,authConfig.secret,(err,decodificado)=>{
      if(err) return res.status(401).send({error: "token invalido"})

      else{
        const id = decodificado.id
        req.userId = id

        
          
        
        next()
      }
    })







  }
}