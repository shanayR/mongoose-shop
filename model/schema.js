import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    image:{
        binData: Buffer
    },
    price:{
        type: Decimal128
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    },
    available_qty: {
        type: Number
    }
  });

const categorySchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
})

const orderSchema =  new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    order_no: {
        type: Number
    },
    product_name: {
        type: mongoose.Schema.Types.ObjectId , ref: 'Product'
    },
    quantity: {
        type: Number
    },
    total_amount: {
        type: Decimal128
    }
})
  

// The alternative to the export model pattern is the export schema pattern.
const Product = mongoose.model('Product ', productSchema);
const Category = mongoose.model('Category ', categorySchema);
const Order = mongoose.model('Order ', orderSchema);

export { Product,Category,Order }