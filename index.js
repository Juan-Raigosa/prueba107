const express = require('express')
require('dotenv').config()
const clienteController = require ('./controllers/cliente.controller');

const app = express()
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/clientes', clienteController.listar)
app.get('/clientes/:correo', clienteController.consultarId)
app.post('/clientes/', clienteController.registrar)
app.get('/clientes', clienteController.listar)
app.delete('/clientes/:correo', clienteController.eliminar)

app.listen(process.env.PORT)