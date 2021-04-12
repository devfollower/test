console.clear();

const express = require('express');
const app = express();
const config = require('./config.js');

//db
require('./db/postgres.js');

//ruting import z api.js
const apiRauter = require('./ruting/api.js')
app.use('/',apiRauter) // dołączaj ruting do głównej sciezki domeny


//ruting przeniesiony do api.js
// app.get('/', (req,res)=>{
//     res.send('Serwer wstał'); //odeslij odpowiedz do consoli
// });

//serwer
app.listen(config.port, ()=>{
    console.log('serwer słucha'); // http://localhost:3000 //odeslij odpowiedz do consoli node
});
