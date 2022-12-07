import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.static("public"));

app.get('/' , (req, res)=>{
res.send("Hi doing good");
});

app.listen(process.env.PORT || 3000  , async ()=>{
    console.log("Server Started");
    try{
        await mongoose.connect(process.env.CONN);
        console.log("Connected to DB🥳");
    } catch(err){
        console.log("Error occured during connection to DB");
    }
});