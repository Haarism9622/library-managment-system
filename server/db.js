// Connecting Node to PostgreSQL

const { Pool } = require('pg');

const pool = new Pool ({
    user: 'haarism',
    host: 'localhost',
    database: 'library_db',
    password: 'password',
    port: 5432
});

