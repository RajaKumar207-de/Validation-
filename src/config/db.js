
import mongoose from "mongoose";
import config from "./env.js";

async function connectToDB() {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Server Connected to DB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}

export default connectToDB;
