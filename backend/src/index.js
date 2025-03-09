//const express=require('express');
import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import { connectDB } from './lib/db.js';
dotenv.config();

const app=express();

const PORT=process.env.PORT || 5001;
app.use(express.json());

app.use("/api/auth",authRoutes);
console.log("Auth Routes Loaded");

app.listen(PORT,()=>{
    console.log("Server is running on PORT:"+ PORT);
    connectDB();
});