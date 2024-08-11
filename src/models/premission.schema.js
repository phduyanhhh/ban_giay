import mongoose from "mongoose";

const Schema = new mongoose.Schema;

const PremissionSchema = new Schema({
    role_id: {
        type: Schema.Types.ObjectId,
        ref: "Role"
    },
    path_id: {
        type: Schema.Types.ObjectId,
        ref: "Path"
    }} , {
        timestamps: true
    }
);

const Premission = mongoose.model("Premission", PremissionSchema)
export default Premission;