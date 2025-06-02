import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    try {
    const pcs = await axios.get(`${API_URL}/laptop`);
    const cameras = await axios.get(`${API_URL}/camera`);
    res.render("homepage.ejs",{pcs:pcs.data,cameras:cameras.data});
  } catch (error) {
    console.log(error);
  }
})

app.get("/signin", async(req, res) => {
    res.render("signin.ejs")
})

app.get("/cart", async(req, res) =>{
    res.render("cart.ejs")
})

app.get("/signindone", async(req, res) => {
    res.render("homepage.ejs")
})

app.get("/signUp", async(req, res) =>{
    res.render("signup.ejs")
})

app.get("/product", async(req, res) =>{
    try {
    const pcs = await axios.get(`${API_URL}/laptop`);
    const cameras = await axios.get(`${API_URL}/camera`);
    res.render("product.ejs",{pcs:pcs.data,cameras:cameras.data});
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
})

