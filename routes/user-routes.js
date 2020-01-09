const express = require('express')
const router = express.Router()
const queries = require('../queries')

    router.get('/users', (request, response) => {
        queries
            .user
            .getAll()
            .then(results => { response.send(results)})
            .then(response.status(201))
    })

    router.post('/users', (request, response) => {
        // if(queries.user.findUser(request.body)){
        //     response.send("Username already exists")
        // }
        // else{
        //     queries.user.createUser(request.body)
        //     .then(user => response.json(user))
        // }  
        queries.user.createUser(request.body)
            .then(user => response.json(user))
    })


module.exports = router