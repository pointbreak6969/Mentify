import mongoose from "mongoose";

const connectDB  = async ()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("Connected to Database successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB", error)
    }
}
export default connectDB;