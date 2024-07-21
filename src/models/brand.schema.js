import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true,
        unique: true
    },
    description: {
        type: String,
        maxLength: 255
    }}, {
        timestamps: true
    });

const Brand = mongoose.model('Brand', BrandSchema);
export default Brand;