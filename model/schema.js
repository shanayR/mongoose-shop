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
        type: String
    },
    available_qty: {
        type: Number
    }
  });
  

// The alternative to the export model pattern is the export schema pattern.
const products = mongoose.model('products ', productSchema);

export { products }