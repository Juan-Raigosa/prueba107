const express = require('express')
require('dotenv').config()
const clienteController = require ('./controllers/cliente.controller');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/clientes', clienteController.listar)
app.get('/clientes/:correo', clienteController.consultarId)
app.post('/clientes/', clienteController.registrar)
app.delete('/clientes/:correo', clienteController.eliminar)

app.listen(process.env.PORT || 8080, '0.0.0.0', () => console.log('Servidor en puerto', process.env.PORT || 8080))