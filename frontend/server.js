import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

function isValidEmail(username) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(username);
}
function isValidPassword(password) {
  return (!/\s/.test(password) && password.length >= 6);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
  try {
    const pcs = await axios.get(`${API_URL}/laptop`);
    const cameras = await axios.get(`${API_URL}/camera`);
    const tops = await axios.get(`${API_URL}/random`);
    res.render("homepage.ejs", { pcs: pcs.data, cameras: cameras.data, tops: tops.data });
  } catch (error) {
    console.log(error);
  }
})

app.get("/login", (req, res) => {
  res.render("signin.ejs")
})
app.post("/login", async (req, res) => {
  try {
    const result = await axios.post(`${API_URL}/auth/login`, req.body);
    console.log("Đăng nhập thành công", result.data);
    res.redirect("/");
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
    } else {
      console.error("Lỗi mạng:", err.message);
    }
  }
});
app.post("/register", async (req, res) => {
  try {
    if (req.body.password !== req.body.repassword) {
      //hien thi thong bao sai mat khau
      console.log("Mat khau va mat khau xac nhan khong trung khop");
    } else {
      if (isValidPassword(req.body.password) && isValidEmail(req.body.username)) {
        const result = await axios.post(`${API_URL}/auth/register`, req.body);
        console.log("Đăng ký thành công thành công", result.data);
        res.redirect("/login");
      }else{
        //thong bao khong hop le
        console.log(isValidEmail(req.body.username));
         console.log(isValidPassword(req.body.password));
        console.log("mat khau khong hop le");
        
      }
    }
  } catch (err) {
    if (err.response) {
      console.log(err.response.data.message);
    } else {
      console.error("Lỗi mạng:", err.message);
    }
  }
});
app.get("/cart", async (req, res) => {
  res.render("cart.ejs")
})

app.get("/signindone", async (req, res) => {
  res.render("homepage.ejs")
})

app.get("/register", async (req, res) => {
  res.render("signup.ejs")
})

app.get("/product/:id", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/product/`, { params: { id: req.params.id } });
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

