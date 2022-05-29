


module.exports ={

async getPublicacao (req, res, next){

  try {

    const publicacoes = await knex("publicacao")

    return res.status(200).json(publicacao)
    
  } catch (error) {

    next(error)
    
  }


}


}