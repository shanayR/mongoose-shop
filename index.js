import express from "express";
import dotenv from 'dotenv/config';
import {router} from './route/router.js';
import path from 'path';
import {dbConnection} from './database/connection.js'

const app = express();
const port = process.env.API_PORT;
const __dirname = path.resolve();

dbConnection()

app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use('/products', router);
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');


app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
  });