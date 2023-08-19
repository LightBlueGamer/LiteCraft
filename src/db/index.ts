/** @format */

import { MongoClient } from "mongodb";
import "dotenv/config";
import { log } from "../utils/logger.js";

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bjnb7xh.mongodb.net/?retryWrites=true&w=majority`;

export const mongoClient = new MongoClient(uri);

export async function startDB() {
    try {
        await mongoClient.connect();
        log(`Client connected to DB.`);
    } catch (error) {
        log(`Error connecting to DB.`);
    }
}
