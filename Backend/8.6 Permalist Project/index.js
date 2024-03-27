import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new  pg.Client({
  user : "postgres",
  host : "localhost",
  database : "permalist",
  password : "h7VNCJ@1",
  port : 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async(req, res) => {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;

    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.log(err);
  };
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ('"+item+"')");
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  await db.query("UPDATE items SET title = '"+req.body.updatedItemTitle+"' WHERE id = "+req.body.updatedItemId);
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
  await db.query("DELETE FROM items WHERE id = "+req.body.deleteItemId);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
