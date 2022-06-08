
const knex = require('../database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require( '../config/auth.json')

module.exports ={


  async authenticate  (req, res, next){
    
    try {


      const {nomeUsuario, senhaUsuario} = req.body

      const psicologos = await  knex("psicologo")

      const user = psicologos.find(psicologo => psicologo.nomeUsuario === nomeUsuario)

      if(!await bcrypt.compare(senhaUsuario, user.senhaUsuario)){


        return res.status(400).send({error: "User not found!"})

      }
        user.senhaUsuario = undefined

        const token = jwt.sign({id: user.id}, authConfig.secret, {
          expiresIn:86400
        })

        req.userToken = token

        
        return res.send({user, token})
        

      
    } catch (error) {
      next(error)
    }

  }
}