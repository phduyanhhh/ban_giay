import mongoose from "mongoose";
import slug from 'mongoose-slug-updater';
mongoose.plugin(slug)
const Schema = mongoose.Schema;

const PathSchema = new Schema({
    path: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String
    },
    slug: {
        type: String,
        slug: 'path',
        unique: true
    }}, {
        timestamps: true
})


const Path = mongoose.model("Path", PathSchema);

export default Path;