import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        maxLength: 255,
        unique: true,
        required: true
    },
    description: {
        type: String,
        maxLength: 255
    },
    brand_id: {
        type: Schema.Types.ObjectId,
        ref: 'Brand'
    }}, {
        timestamps: true
    })

const Product = mongoose.model("Product", ProductSchema);
export default Product;