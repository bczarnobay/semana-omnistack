const { Router } = require('express')
const devController =  require('./controllers/DevController')
const searchController =  require('./controllers/SearchController')
const routes = Router()

// query params: request.query (filters, sort data, pagination..)
// route params: request.params (identify a db resource)
// body: request.body

//controllers: index, show, store, update, destroy

routes.post('/devs', devController.store)
routes.get('/devs', devController.index)

routes.get('/search', searchController.index)

module.exports = routes;