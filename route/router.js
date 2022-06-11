import express from "express";
// import {  } from "../controller/controller.js";

const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

router.get('/',homeView)
// router.get('/add', renderForm)
// router.post('/add', createUser)
// router.get('/update/:id',updateForm)
// router.post('/update/:id',updateUser)
// router.get('/delete/:id',deleteUser)
  
 export {router}