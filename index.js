import dotenv from 'dotenv'
import express from "express";

dotenv.config()

app.use('/items', router);
app.set('view engine', 'ejs');

app.listen(port, function () {
    console.log(`Port is now running @ ${port}`)
  });