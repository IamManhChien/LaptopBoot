import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from './models/db.js';
import authRoute from './routes/auth.js';
import productRoute from "./routes/product.js";
import cookieParser from "cookie-parser";
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
app.use(cors({
  origin: 'http://localhost:3000', // FE origin
  credentials: true
}));
app.use(cookieParser()); 
app.use(express.json());
const port = 4000;

//routes
app.use("/auth",authRoute);
app.use("/",productRoute);
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});