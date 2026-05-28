const mongoose = require('mongoose');

const URI='mongodb+srv://Juan_Raigosa:K0ZwF0zr0HCrE1hN@prueba107.pwe3cyx.mongodb.net/prueba_107'
mongoose.connect(URI)

module.exports = mongoose;