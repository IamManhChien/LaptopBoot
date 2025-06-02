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
    const tops = await axios.get(`${API_URL}/random`);
    res.render("homepage.ejs",{pcs:pcs.data,cameras:cameras.data,tops:tops.data});
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

app.get("/product/:id", async(req, res) =>{
  try {
    const result = await axios.get(`${API_URL}/product/`, {params: {id: req.params.id}});
    if (result.data.length === 0) {
      return res.status(404).send('Sản phẩm không tồn tại');
    }
    res.render('Product.ejs', { product: result.data[0] });
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
})

app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
})

