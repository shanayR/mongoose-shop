import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId
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
    category: {
        type: Schema.Types.ObjectId, ref: 'Category'
    },
    available_qty: {
        type: Number
    }
  });

const categorySchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId
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
        type: Schema.Types.ObjectId
    },
    order_no: {
        type: Number
    },
    product_name: {
        type: Schema.Types.ObjectId , ref: 'Product'
    },
    quantity: {
        type: Number
    }
    total_amount: {
        type: Decimal128
    }
})
  

// The alternative to the export model pattern is the export schema pattern.
const Product = mongoose.model('Product ', productSchema);
const Category = mongoose.model('Category ', categorySchema);

export { products }