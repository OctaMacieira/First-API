const cors = require('cors');
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) =>
{
    try {
        
        //response is axios answer, however I choose to extract just the "data" part of the response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)

        return res.json(data)
        
    } catch (error)
    {
        console.log(error)
    }
    
 })

app.listen('4567')