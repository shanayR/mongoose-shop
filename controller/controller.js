// import { dbConnection,ObjectId } from "../database/connection.js"

const homeView = (req,res) => {
        res.render('index')
};

const addView = (req,res) => {
    res.render('additems')
};

const updateView = (req,res) => {
    res.render('updateitems')
};

export {homeView,addView,updateView}