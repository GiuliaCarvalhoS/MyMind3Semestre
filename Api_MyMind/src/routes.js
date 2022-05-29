
const express = require('express')
const authController = require('./controllers/authController')

const routes = express.Router()

const PsicologoController = require('./controllers/PsicologoController')
const middlewares = require('./middlewares/middlewares')

routes.get('/psicologos' ,PsicologoController.index)
routes.post('/psicologos', PsicologoController.create)


routes.put('/psicologos/:nomeUsuario',middlewares.auth, PsicologoController.update)
routes.delete('/psicologos/:nomeUsuario',middlewares.auth, PsicologoController.delete)


routes.post('/authenticate', authController.authenticate)

module.exports = routes 