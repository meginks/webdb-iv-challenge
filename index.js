const express = require('express');
const recipeDB = require('./dishes/dishes-helper');

const server = express(); 

server.use(express.json()); 

// this is where you'd put the endpoints 


const port = process.env.PORT || 5011; 

server.listen(port, () => 
{console.log(`\n** api running on http://localhost:${port} **\n`)}); 

