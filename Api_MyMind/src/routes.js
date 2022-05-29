
const express = require('express')
const authController = require('./controllers/authController')

const routes = express.Router()

//controllers
const PsicologoController = require('./controllers/PsicologoController')
const publicacaoController = require('./controllers/publicacaoController')


const middlewares = require('./middlewares/middlewares')

routes.get('/psicologos' ,PsicologoController.index)
routes.post('/psicologos', PsicologoController.create)


routes.put('/psicologos/:nomeUsuario',middlewares.auth, PsicologoController.update)
routes.delete('/psicologos/:nomeUsuario',middlewares.auth, PsicologoController.delete)

//rota para autenticação do login
routes.post('/authenticate', authController.authenticate)


//rota das publicações
routes.get("/perfil",publicacaoController)


module.exports = routes 