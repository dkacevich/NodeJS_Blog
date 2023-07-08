import {model, Schema} from "mongoose";

const Role = new Schema({
    value: {type: String, unique: true, default: "USER"},
}, { timestamps: true })


export default model("Role", Role)