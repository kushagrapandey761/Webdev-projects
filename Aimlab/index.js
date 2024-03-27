import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "aimlab",
  password: "h7VNCJ@1",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.get("/", (req, res) => {
    res.render("login.ejs");
  });
app.post("/login",async(req,res)=>{
    console.log(req.body);
    const result = await db.query("SELECT password FROM login WHERE emailid='"+req.body.emailid+"'");
    if(result.rowCount>0)
    {
    if(result.rows[0].password===req.body.password)
    res.render("index.ejs");
    else
    res.send('<h1>Incorrect password</h1>')
    }
    else
    res.send('<h1>Email not registered</h1>');
    console.log(result.rows);
})
app.post("/signup",async(req,res)=>{
  res.render("signup.ejs");
})
app.post("/signup1",async(req,res)=>{
  let flag=0;
  console.log(req.body);
  for(let i=0;i<req.body.emailid.length;i++)
  {
    if(req.body.emailid.charAt(i)=="@")
    {
      flag=1;
      break;
    }
  }
  if(flag==1)
  {
    await db.query("INSERT INTO login(emailid,password) VALUES ('"+req.body.emailid+"','"+req.body.password+"')");
    res.render("index.ejs");
  }
  else
  res.send('<h1>Invalid Email</h1>');
})

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

  