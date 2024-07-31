import mongoose from "mongoose";
const Schema = mongoose.Schema;

const WarehouseSchema = new Schema({
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
        unique: true
    },
    type: [
        {
            classify_id: {
                type: Schema.Types.ObjectId,
                ref: "Classify",
                required: true
            },
            size: {
                type: Number,
                min: 10,
                max: 40,
                required: true
            },
            quanlity: {
                type: Number
            }
        }
    ]
})

const Warehouse = mongoose.model("Warehouse", WarehouseSchema);
export default Warehouse;