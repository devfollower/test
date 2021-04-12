console.clear();
const config = require('../config.js');
const { Client } = require('pg');

const client = new Client({
                            connectionString: config.connectionString
                         });
client.connect();
console.log('------------1----------');
let wynik;

/*
client.query('SELECT * FROM Employee where id = $1',[w], 
        (err, res)=> {
                wynik = res.rows[0]
                console.log(res.rows[0]);
               // console.log('------------11----------');
                client.end();
                }      
        );
*/
let w = 2;
let q = 'SELECT * FROM Employee where id = $1';

client.query(q,[w], (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of res.rows) {
            console.log(row);

      
            
        }
        client.end();
    });
//console.log(row);
module.exports = {
                   homepage: (req,res)=>{
                                          res.send('Serwer ');
                                        }
                 };