import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
mongoose.plugin(slug);
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
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    }}, {
        timestamps: true
    })

const Product = mongoose.model("Product", ProductSchema);
export default Product;