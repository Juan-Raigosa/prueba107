const express = require('express')
const clienteController = require ('./controllers/cliente.controller')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/clientes', clienteController.listar)
app.get('/clientes/:correo', clienteController.consultarId)
app.post('/clientes/', clienteController.registrar)
app.get('/clientes', clienteController.listar)
app.delete('/clientes/:correo', clienteController.eliminar)

app.listen(8080)