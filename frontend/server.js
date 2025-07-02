import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import helpers from './helpers/format.js';

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
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    res.render("homepage.ejs", { helpers,pcs: pcs.data, cameras: cameras.data, tops: tops.data });
  } catch (error) {
    console.log(error);
  }
})

app.get("/laptop", async (req, res) => {
  try {
    const pcs = await axios.get(`${API_URL}/laptop`);
    res.render("laptop.ejs", { helpers,pcs: pcs.data });
  } catch (error) {
    console.log(error);
  }
});

app.get("/laptop/:brand", async (req, res) => {
  try {
    const params = {};
    params.brand = req.params.brand
    if (req.params.mucGia) params.mucGia = mucGia;
    const pcs = await axios.get(`${API_URL}/laptop/:brand`, { params: params });
    res.render("laptop.ejs", { helpers,pcs: pcs.data });
    // res.json(params);
  } catch (error) {
    console.log(error);
  }
});

app.get("/camera", async (req, res) => {
  try {
    const cameras = await axios.get(`${API_URL}/camera`);
    res.render("camera.ejs", { helpers,cameras: cameras.data });
  } catch (error) {
    console.log(error);
  }
});

app.get("/camera/:brand", async (req, res) => {
  try {
    const params = {};
    params.brand = req.params.brand;
    if (req.params.mucGia) params.mucGia = mucGia;
    const cameras = await axios.get(`${API_URL}/camera/:brand`, { params: params });
    res.render("camera.ejs", { helpers,cameras: cameras.data });
  } catch (error) {
    console.log(error);
  }
});

app.get("/login", async (req, res) => {
  if (req.headers.cookie) {
    res.render("accountpage.ejs");
  } else {
    res.render("signin.ejs", { message: "" });
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
      res.render("signin.ejs", { message: "Tên đăng nhập hoặc mật khẩu không đúng" });
    } else {
      console.error("Lỗi mạng:", err.message);
      res.render("signin.ejs", { message: "Tên đăng nhập hoặc mật khẩu không đúng" });
    }
  }
});

app.get("/register", async (req, res) => {
  if (req.headers.cookie) {
    res.redirect("/");
  } else {
    res.render("signup.ejs");
  }
})

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
    res.render('Product.ejs', { helpers,product: result.data[0], message: "" });
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
})

app.get("/cart", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.get(`${API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${access_token.data}`
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
      const product = JSON.parse(req.body.addproduct);
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.post(`${API_URL}/cart`, {
        product
      }, {
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.status(200).render('Product.ejs', { helpers,product: product, message: "Đã thêm vào giỏ hàng" });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});

app.post("/buynow", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const product = JSON.parse(req.body.buynowproduct);
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.post(`${API_URL}/buynow`, {
        product
      }, {
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.redirect("/cart");
      // const new_data = await axios.get(`${API_URL}/cart`, {
      //   headers: {
      //     Authorization: `Bearer ${req.headers.cookie.split("=")[1]}`
      //   }
      // });

      // res.render("cart.ejs", { data: new_data.data });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});

app.get("/cart/add/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (req.headers.cookie) {
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.put(`${API_URL}/cart`, {
        params: { product_id: productId ,action: `add`},
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.redirect("/cart");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Lỗi xóa giỏ hàng:", error);
    res.status(500).send("Lỗi máy chủ");
  }
});

app.get("/cart/sub/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (req.headers.cookie) {
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.put(`${API_URL}/cart`, {
        params: { product_id: productId ,action: `sub`},
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.redirect("/cart");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Lỗi xóa giỏ hàng:", error);
    res.status(500).send("Lỗi máy chủ");
  }
});

app.get("/cart/delete/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (req.headers.cookie) {
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.delete(`${API_URL}/cart`, {
        params: { product_id: productId },
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.redirect("/cart");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error("Lỗi xóa giỏ hàng:", error);
    res.status(500).send("Lỗi máy chủ");
  }
});



app.get("/payment", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.get(`${API_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.render("paymentpage.ejs", { data: result.data });
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});

app.post("/cart/checkout", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.post(`${API_URL}/checkout`, {
        address: req.body.address,
        note: req.body.note,
        paymentMethod: "cod"
      }, {
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.status(200).render("success.ejs");
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Lỗi máy chủ');
  }
});

app.get("/customer/order", async (req, res) => {
  try {
    if (req.headers.cookie) {
      const access_token = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: `${req.headers.cookie.split("=")[1]}`
      });
      const result = await axios.get(`${API_URL}/order`, {
        headers: {
          Authorization: `Bearer ${access_token.data}`
        }
      });
      res.status(200).render("historybuy.ejs", { data: result.data });
      // res.status(200).json(result.data);
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
