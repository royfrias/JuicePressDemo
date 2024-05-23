import { Schema, model } from "mongoose"

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    employeeID: {
        type: Number,
        required: true
    }
});

export default model("User", userSchema);