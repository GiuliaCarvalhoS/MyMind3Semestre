
const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer.js')

const authController = require('./controllers/authController')

const routes = express.Router()

//controllers
const PsicologoController = require('./controllers/PsicologoController')
const publicacaoController = require('./controllers/publicacaoController')


const middlewares = require('./middlewares/middlewares')

routes.get('/psicologos' ,PsicologoController.index)
routes.post('/psicologos', PsicologoController.create)
routes.post('/encontrarpsicologo' ,PsicologoController.retornaPsi)


routes.put('/psicologos/:nomeUsuario', PsicologoController.update)
routes.delete('/psicologos/:nomeUsuario', PsicologoController.delete)

//rota para autenticação do login
routes.post('/login',authController.authenticate)


//rota das publicações
routes.get("/feed",publicacaoController.getPublicacao)
routes.post("/publicar",multer(multerConfig).single("file"),publicacaoController.publicar)
routes.delete('/feed/:id', publicacaoController.delete)



module.exports = routes 

