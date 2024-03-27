const fs = require("fs");
fs.writeFile("message1.txt","Hello from node js", err=>{
    if(err) throw err;
    console.log("The file has been saved");
});
fs.readFile("message1.txt","utf8",(error,data)=>{
    if(error) throw error;
    console.log(data);
})