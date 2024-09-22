// const mongoose = require("mongoose");
import mongoose  from "mongoose";
const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected");  
    }
    catch (err) {
        console.log(err);
        process.exit;
    }
};
export default connectDb;