import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
let refreshTokens = [];
const authController = {
    registerUser: async (req, res) => {
        try {
            const user = await User.findOne({ where: { username: req.body.username } });
            if (user) {
                res.status(404).json("username adready used!");
            }
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newUser = User.build({
                username: req.body.username,
                password: hashed
            });
            const addUser = await newUser.save();
            res.status(200).json(addUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    generateAccessToken: (user) => {
        return jwt.sign({
            username: user.username
        }, process.env.JWT_ACCESS_KEY,
            { expiresIn: "1m" });
    },
    generateRefreshToken: (user) => {
        return jwt.sign({
            username: user.username
        }, process.env.JWT_REFRESH_KEY,
            { expiresIn: "200d" });
    },
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ where: { username: req.body.username } });
            if (!user) {
               return res.status(404).json("Wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                return res.status(404).json("Wrong password!");
            }
            const access_token = authController.generateAccessToken(user);
            const refresh_token = authController.generateRefreshToken(user);
            refreshTokens.push(refresh_token);
            res.cookie("refreshToken", refresh_token, {
                httpOnly: true,
                path: "/",
                sameSite: "strict",
                secure: true
            });
            const { password, ...others } = user.dataValues;
            return res.status(200).json({ others, access_token });
        } catch (error) {
            res.status(500).json(error);
        }
    },
    requestRefreshToken: async (req, res) => {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json("You're not authenticated");
        }
        if (refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid")
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);
            res.cookie("refreshToken", newRefreshToken, {
                httpOnly: true,
                path: "/",
                sameSite: "strict",
                secure: true
            });
            res.status(200).json(newAccessToken);
        });
    }
}
export default authController;