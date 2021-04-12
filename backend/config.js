module.exports = {
    port: process.env.port || 3000, //port servera backend
    connectionString: 'postgres://postgres:postgis@localhost:5432/postgis23',
// nie użyte
    user: process.env.USER ||'postgres',
    host: 'localhost',
    database: process.env.database || 'postgis23',
    password: 'postgis',
    pgport: 5432,
};