import mongoose from "mongoose";
import slug from "mongoose-slug-updater";
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const AccountSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    birthday: {
        type: Date
    },
    address: {
        type: String
    },
    role_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    slug: {
        type: String,
        slug: ["last_name", "first_name"],
        unique: true
    }}, {
        timestamps: true
});

const Account = mongoose.model("Account", AccountSchema);
export default Account;