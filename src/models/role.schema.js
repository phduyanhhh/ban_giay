import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 255
    },
    description: {
        type: String
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    }}, {
        timestamps: true
    }
)

const Role = mongoose.model("Role", RoleSchema);
export default Role;