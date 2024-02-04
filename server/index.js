import express from 'express';
import Connection from './database/db.js';
import Defaultdata from './default.js';
import dotenv from 'dotenv';
const app = express();

const port = 8000;

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password );

app.listen(port,()=>{
    console.log(`Succesfully running on the ${port}`);
})

Defaultdata();
