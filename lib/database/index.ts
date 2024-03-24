import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn: null, promise: null};

export async function connectToDB() {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error("MongoDB URI is missing");

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: "cfi-notes",
        bufferCommands: false,
    }); 

    cached.conn = await cached.promise;

    return cached.conn;
}