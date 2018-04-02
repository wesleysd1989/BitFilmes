const Filme = require('./filme')
const errorHandler = require('../common/errorHandler')

Filme.methods(['get', 'post', 'put', 'delete'])
Filme.updateOptions({new: true, runValidators: true})
Filme.after('post', errorHandler).after('put', errorHandler)

Filme.route('count', (req, res, next) => {
    Filme.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Filme