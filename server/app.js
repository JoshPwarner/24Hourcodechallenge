const express = require('express')
const app = express()
const port = 3000;
const cors = require('cors');


app.get('/', (req,res)=> res.send('Welcome to Google!'))

app.get('/searchresults', (req,res)=>res.send(searchResults))

app.listen(port, () => console.log(`Server is up and running at http://localhost:${port}`))