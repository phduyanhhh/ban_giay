import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
mongoose.plugin(slug);
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
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    }}, {
        timestamps: true
    });

const Classify = mongoose.model('Classify', ClassifySchema);
export default Classify;