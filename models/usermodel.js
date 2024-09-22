// const mongoose = require("mongoose");
import mongoose  from "mongoose";

const userschema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please add a name"],
    },
    email:{
        type: String,
        required: [true, "Please give emial"],
        unique: [true, "Email add already exists"],
    },
    password: {
        type: String,
        required: [true, "Please pass password"],
    },
    }, 
    {
    timestamps: true,
    }
);

export default mongoose.model("Trainer", userschema);