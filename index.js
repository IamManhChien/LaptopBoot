import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "laptopBoot",
  password: "Abc123456",
  port: 5432,
});
db.connect();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4000;
let pc =[{data : "Du lieu PC"}]
let cameras =[{data : "Du lieu camera"}]
let accessories =[{data : "Du lieu linh kien"}]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/laptop",async (req,res)=>{
    const result = await db.query("SELECT * FROM products WHERE type='laptop'");
    res.json(result.rows);
});
app.get("/camera",async (req,res)=>{
    const result = await db.query("SELECT * FROM products WHERE type='camera'");
    res.json(result.rows);
});
app.get("/product",(req,res)=>{
    res.json([]) 
});
app.get("/signin",(req,res)=>{
    res.json([]) 
});
app.get("/signup",(req,res)=>{
    res.json([]) 
});
app.get("/search",(req,res)=>{
    console.log(req.query.key);
    res.json({data : 'Ket qua tim kiem cho '+ req.query.key}) 
});
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});