import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config()

const pool= mysql.createPool({
    host: process.env.MYSQL_host,
    user:process.env.MYSQL_user,
    password:process.env.MYSQL_psw,
    database:process.env.MYSQL_db,
}).promise()


export async function getRows()
{
const [rows] = await pool.query('select * from DATA')
return rows
}

export async function getFilterRow(name)
{
const [rows] = await pool.query(
    `select * from DATA 
    where company = '${name}'
    `)
return rows
}

