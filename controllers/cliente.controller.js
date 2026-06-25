const modeloCliente = require('../models/cliente.model')

exports.listar = async (req, res) => {
    try {
        const clientes = await modeloCliente.find();
        res.render('pages/index3', {clientes: clientes});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.consultarId = async (req, res) => {
    try {
        const clientes = await modeloCliente.find({email:req.params.correo});
        res.render('/pages/index3');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.registrar = async (req, res) => {
    try {
        let clienteNuevo = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
        const clientes = await modeloCliente.insertOne(clienteNuevo);
        res.render('/pages/form');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.actualizar = async (req, res) => {
    try {
        let clienteNuevo = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }
        const clientes = await modeloCliente.updateOne(
            {email: req.params.correo},
            {$set: clienteNuevo}
        );
        res.render('/pages/index3');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.eliminar = async (req, res) => {
    try {
        const clientes = await modeloCliente.deleteOne({email:req.params.correo});
        res.render('/pages/index3');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

