const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    const filme = require('../api/filme/filmeService')
    filme.register(router, '/filmes')

    const serie = require('../api/serie/serieService')
    serie.register(router, '/series')
}