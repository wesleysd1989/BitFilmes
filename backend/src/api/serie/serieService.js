const Serie = require('./serie')
const errorHandler = require('../common/errorHandler')

Serie.methods(['get', 'post', 'put', 'delete'])
Serie.updateOptions({new: true, runValidators: true})
Serie.after('post', errorHandler).after('put', errorHandler)

Serie.route('count', (req, res, next) => {
    Serie.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Serie