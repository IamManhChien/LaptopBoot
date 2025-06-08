import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { QueryTypes } from "sequelize";
import sequelize from './models/db.js';
import authRoute from './routes/auth.js';
dotenv.config(); 
// Test kết nối & sync
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối thành công!');
    await sequelize.sync();
  } catch (err) {
    console.error('Lỗi:', err);
  }
})();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const port = 4000;

//routes
app.use("/auth",authRoute);


app.get("/laptop",async (req,res)=>{
    const result = await sequelize.query("SELECT * FROM products WHERE type='laptop'",{
        type: QueryTypes.SELECT
    });
    res.json(result);
});
app.get("/camera",async (req,res)=>{
    const result = await sequelize.query("SELECT * FROM products WHERE type='camera'",{
        type: QueryTypes.SELECT
    });
    res.json(result);
});
app.get("/random",async (req,res)=>{
    const result = await sequelize.query("SELECT * FROM products ORDER BY RANDOM() LIMIT 8;",{
        type: QueryTypes.SELECT
    });
    res.json(result);
});
app.get("/product/",async (req,res)=>{
    const result = await sequelize.query("SELECT * FROM products WHERE id= (?)",{
        replacements: [req.query.id],
        type: QueryTypes.SELECT
    });
    res.json(result);
});
app.get("/register",(req,res)=>{
    res.json([]) 
});
app.get("/search",(req,res)=>{
    console.log(req.query.key);
    res.json({data : 'Ket qua tim kiem cho '+ req.query.key}) 
});
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});