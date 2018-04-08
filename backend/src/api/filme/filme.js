const restful = require('node-restful')
const mongoose = restful.mongoose

const elencoSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const generoSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const filmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    duracao: { type: Number, min: 1, max: 420, required: true },
    ano: { type: Number, min: 1900, max: 2100, required: true },
    qualidade: { type: String, required: true },
    sinopse: { type: String, required: true },
    linkTrailer: { type: String, required: true },
    linkCapa: { type: String, required: true },
    linkThumbnail: { type: String, required: true },
    linkPlayer: { type: String, required: true },
    elenco: [elencoSchema],
    genero: [generoSchema],
    createdAt: { type: Date, default: Date.now }
})


module.exports = restful.model('Filme', filmeSchema)