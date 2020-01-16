const { Router } = require('express')
const axios = require('axios')

const routes = Router()

// query params: request.query (filters, sort data, pagination..)
// route params: request.params (identify a db resource)
// body: request.body

routes.post('/devs', async (request, response) => {
  const { github_username } = request.body 
  const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
  
  const { name = login, avatar_url, bio } = apiResponse.data
  console.log(name, avatar_url, bio, github_username)
 
  return response.json({ message: 'hellop'})
});

module.exports = routes;