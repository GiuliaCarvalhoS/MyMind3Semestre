
const express = require('express')

const routes = express.Router()

const PsicologoController = require('./controllers/PsicologoController')

routes.get('/psicologos', PsicologoController.index)
routes.post('/psicologos', PsicologoController.create)


routes.put('/psicologos/:nomeUsuario', PsicologoController.update)
routes.delete('/psicologos/:nomeUsuario', PsicologoController.delete)

module.exports = routes 