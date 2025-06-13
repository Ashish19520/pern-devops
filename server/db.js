const Pool = require('pg').Pool


const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "database-1-postgres-pern-app.cxysic4a4f4z.ap-southeast-2.rds.amazonaws.com",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;

