// crear conecxion con la base  de datos 

require("dotenv").config()// 1.importar  dotenv
const mysql = require("mysql2")// 2.importar  mysql2
// 3.Variables de entorno  host,user,password y name  en la base de datos en el echivo .env
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

// 4. Crear  un pool 
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
})

// exportat poll. primise()
module.exports = pool.promise();