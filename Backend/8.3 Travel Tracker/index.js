import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new pg.Client({
  user : "postgres",
  host : "localhost",
  database : "world",
  password : "h7VNCJ@1",
  port : 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited()
{
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  //Write your code here.
  
  const countries = await checkVisited();
  res.render("index.ejs", { countries: countries, total: countries.length });

});

app.post("/add",async(req,res)=>{
  try{
  const result = await db.query("SELECT country_code FROM countries where country_name = '"+req.body.country+"'");
  await db.query("INSERT INTO visited_countries(country_code) VALUES ($1)",[result.rows[0].country_code]);
  res.redirect("/");
  }
  catch(err)
  {
    if(err == 'error: duplicate key value violates unique constraint "visited_countries_country_code_key"')
    {
    const countries = await checkVisited();
    res.render("index.ejs",{countries : countries, total:countries.length,error:"Country already exists"})
    }
    else if(err == "TypeError: Cannot read properties of undefined (reading 'country_code')")
    {
      const countries = await checkVisited();
      res.render("index.ejs",{countries : countries, total:countries.length,error:"Country does not exist try again"})
    }
    else
    {
      const countries = await checkVisited();
      res.render("index.ejs",{countries : countries, total:countries.length,error:err})
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
