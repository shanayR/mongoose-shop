import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    category: {
        type: String
    }
});

// The alternative to the export model pattern is the export schema pattern.
const itemsDB = mongoose.model('genetech_items', itemSchema);

export { itemsDB }