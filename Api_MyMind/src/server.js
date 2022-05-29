const express = require('express')
const cors = require('cors')

const middleWares = require('./middlewares/middlewares')

const routes = require('./routes')

const app = express()

app.use(cors())
app.options("*", cors());
app.use(express.json())
app.use(routes)


//Not Found
app.use(middleWares.notFound)

// catch all
app.use(middleWares.catchAll)

//token






app.listen(3333, ()=> console.log('rodando servidor'))