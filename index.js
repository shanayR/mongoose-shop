import dotenv from 'dotenv';
import express from "express";
import {router} from './route/router.js';
const app = express();
const port = process.env.API_PORT;

dotenv.config()

app.use('/products', router);
app.set('view engine', 'ejs');

app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
  });