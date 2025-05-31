import express, {urlencoded} from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.static("pages"));

app.get("/", async (req, res) => {
    res.render("../pages/Homepage.ejs")
})

app.get("/SignIn", async(req, res) => {
    res.render("../pages/SignIn.ejs")
})

app.get("/Cart", async(req, res) =>{
    res.render("../pages/Cart.ejs")
})

app.get("/SignInDone", async(req, res) => {
    res.render("../pages/Homepage.ejs")
})

app.get("/SignUp", async(req, res) =>{
    res.render("../pages/SignUp.ejs")
})

app.get("/Product", async(req, res) =>{
    res.render("../pages/Product.ejs")
})

app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
})

