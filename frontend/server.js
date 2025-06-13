import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";
axios.defaults.withCredentials = true;


function isValidEmail(username) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(username);
}
function isValidPassword(password) {
  return (!/\s/.test(password) && password.length >= 6);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", async (req, res) => {
  try {
    const pcs = await axios.get(`${API_URL}/laptop`);
    const cameras = await axios.get(`${API_URL}/camera`);
    const tops = await axios.get(`${API_URL}/random`);
    if (req.headers.cookie) {
      await axios.get(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${req.headers.cookie.split("=")[1]}`
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    res.render("homepage.ejs", { pcs: pcs.data, cameras: cameras.data, tops: tops.data });
  } catch (error) {
    console.log(error);
  }
})

app.get("/login", (req, res) => {
  if (req.headers.cookie) {
    res.render("accountpage.ejs");
  } else {
    res.render("signin.ejs");
  }
})
app.get("/register", async (req, res) => {
  if (req.headers.cookie) {
    res.redirect("/");
  } else {
    res.render("signup.ejs");
  }
})
app.post("/login", async (req, res) => {
  try {
    const result = await axios.post(`${API_URL}/auth/login`, req.body);
    res.cookie('refreshToken', result.data.refresh_token, {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000 * 200
    });
    console.log("Đăng nhập thành công", result.data);
    res.redirect("/");
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      res.redirect("/login");
    } else {
      console.error("Lỗi mạng:", err.message);
      res.redirect("/login");
    }
  }
});
app.post("/register", async (req, res) => {
  try {
    if (req.body.password !== req.body.repassword) {
      //hien thi thong bao sai mat khau
      console.log("Mat khau va mat khau xac nhan khong trung khop");
      return;
    }
    if (isValidPassword(req.body.password) && isValidEmail(req.body.username)) {
      const result = await axios.post(`${API_URL}/auth/register`, req.body);
      console.log("Đăng ký thành công thành công", result.data);
      res.redirect("/login");
    } else {
      //thong bao khong hop le
      console.log("mat khau khong hop le");
    }
  } catch (err) {
    if (err.response) {
      res.redirect("/register");
      console.log(err.response.data.message);//render loi tai khoan
    } else {
      console.error("Lỗi mạng:", err.message);
    }
  }
});
app.get("/logout", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/auth/logout`);
    console.log(result);
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: 'Lax'
    });
    res.redirect("/");
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      res.redirect("/login");
    } else {
      console.error("Lỗi mạng:", err.message);
      res.redirect("/login");
    }
  }
});
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
app.get("/cart", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const result = await axios.get(`${API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${req.headers.cookie.split("=")[1]}`
        }
      });
      res.render("cart.ejs", { data: result.data });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});
app.post("/cart", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const id = 'asus-vivobook-16-x1605va-i5-mb360w'; //tuong trung
      const product = JSON.parse(req.body.addproduct);
      const result = await axios.post(`${API_URL}/cart`, {
        params: { username: req.params.username, product: product },
        headers: {
          Authorization: `Bearer ${req.headers.cookie.split("=")[1]}`
        }
      });
      //có thể truyền json product thì tốt không thì truyền product_id cũng đc, khớp sau
      res.status(200).json(result.data);
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});

app.delete("/cart", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const id = 'asus-vivobook-16-x1605va-i5-mb360w'; //tuong trung
      const result = await axios.delete(`${API_URL}/cart`, {
        params: { product: req.params.product },
        headers: {
          Authorization: `Bearer ${req.headers.cookie.split("=")[1]}`
        }
      });
      res.status(200).json(result.data);
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});
app.get("/buynow", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const product = JSON.parse(req.body.buynowproduct);
      const result = await axios.get(`${API_URL}/buynow`, {
        params: { username: req.params.username, product: product },
        headers: {
          Authorization: `Bearer ${req.headers.cookie.split("=")[1]}`
        }
      });
      res.render("cart.ejs", { data: result.data });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});

app.listen(port, () => {
  console.log(`Sever running on port ${port}`);
})
