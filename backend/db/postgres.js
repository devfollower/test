console.clear();
const config = require('../config.js');
const { Client,Pool } = require('pg');

let w = 2;

//const connectionString = 'postgres://postgres:postgis@localhost:5432/postgis23';
const client = new Client({
                            connectionString: config.connectionString
                         });
client.connect();
console.log('------------1----------');
let wynik;


client.query('SELECT * FROM Employee where id = $1',[w], 

//setTimeout(

        (err, res)=> {
                wynik = res.rows[0]
                console.log(res.rows[0]);
               // console.log('------------11----------');
                client.end();
                }
 //       ,500)

        
        
        
        );//.then(()=>{console.log('odczyt');});
//console.log('-----------kon-----------');

console.log(wynik);