import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ClassifySchema = new Schema({
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

const Classify = mongoose.model('Classify', ClassifySchema);
export default Classify;