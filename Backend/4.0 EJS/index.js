import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    const d = new Date();
    const day = d.getDay();//0 = Sunday, 1 = Monday so on ...
    if(day>=1 && day<=5){
        res.render("index.ejs",{
            dayType: "a weekday",
            advice: "It's time to work hard"})
    }
    else if(day==0 || day==7){
        res.render("index.ejs",{
            dayType: "a weekend",
            advice: "It's time to have fun"})
    }
})

app.listen(port,()=>{
    console.log("Listening to port : "+port);
})