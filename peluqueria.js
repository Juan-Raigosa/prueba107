const express = require('express')
require('dotenv').config()
const clienteController = require ('./controllers/servicios.controller')
const { default: mongoose } = require('mongoose')

function conectar (){
    const URI = 'mongodb+srv://Juan_Raigosa:K0ZwF0zr0HCrE1hN@prueba107.pwe3cyx.mongodb.net/servicios'
    mongoose.connect(URI)
}

conectar()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/servicios', clienteController.listar)
app.get('/servicios/:nombre', clienteController.consultarId)
app.post('/servicios/', clienteController.registrar)
app.put('/servicios/:nombre', clienteController.actualizar)
app.delete('/servicios/:nombre', clienteController.eliminar)

app.listen(process.env.PORT, () =>(
    console.log('App en linea')
))