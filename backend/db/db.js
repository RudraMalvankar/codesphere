import mongoose from "mongoose";

// console.log("Attempting to connect to MongoDB...");

function connect() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch(err => {
            console.error("Failed to connect to MongoDB:", err); // More detailed error logging
        });
}

export default connect;
