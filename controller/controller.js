import  { Product,Category,Order } from '../model/schema.js'

const homeView = (req,res) => {
        res.render('index')
};

const addView = (req,res) => {
    res.render('additems')
};

const updateView = (req,res) => {
    res.render('updateitems')
};
const deleteView = (req,res) => {
    res.redirect('/products')
};


export {homeView,addView,updateView ,deleteView}