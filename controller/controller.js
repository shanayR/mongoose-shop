import  { Product,Category,Order } from '../model/schema.js'
import mongoose from 'mongoose';
import {dbConnection} from '../database/connection.js'

//render pages
const homeView = (req,res) => {
    Product.find().then(productData => {
        res.render('index',{productData})
    })
};

const addView = (req,res) => {
    res.render('additems')
};

const updateView = (req,res) => {
    // const productData = Product.findOne({
    //     _id: req.params.id
    // });
    // console.log(productData)
    res.render('updateitems')
};
// crud
const addProduct =  (req,res) => {
    const product = new Product({

        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price:req.body.price,
        category:req.body.category,
        available_qty:req.body.quantity,
    })
    product.save(product).then(data =>{
        console.log(data);
        res.redirect("/products")
    })
}
const deleteView = (req,res) => {
    res.redirect('/products')
};


export {homeView,addView,updateView ,deleteView,addProduct}