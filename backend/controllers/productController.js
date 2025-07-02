import { QueryTypes, Op } from "sequelize";
import sequelize from '../models/db.js';
import Product from '../models/products.js';
const productController = {
    getLaptop: async (req, res) => {
        const mucGia = req.query.mucGia;
        let price = null;
        switch (mucGia) {
            case "0-10":
                price = [0, 10000000];
                break;
            case "10-15":
                price = [10000000, 15000000];
                break;
            case "15-20":
                price = [15000000, 20000000];
                break;
            case "tren-20":
                price = [20000000];
                break;
            default:
                price = null;
        }
        const whereClause = {
            type: "laptop"
        };
        if (price) {
            if (price.length === 2) {
                whereClause.gia = {
                    [Op.between]: price
                };
            } else if (price.length === 1) {
                whereClause.gia = {
                    [Op.gte]: price[0]
                };
            }
        }
         try {
            const result = await Product.findAll({
                where: whereClause
            });
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Lỗi truy vấn" });
        }
    },
    getLaptopByBrand: async (req, res) => {
        const brand = req.query.brand.toLowerCase();
        const mucGia = req.query.mucGia;
        let price = null;
        switch (mucGia) {
            case "0-10":
                price = [0, 10000000];
                break;
            case "10-15":
                price = [10000000, 15000000];
                break;
            case "15-20":
                price = [15000000, 20000000];
                break;
            case "tren-20":
                price = [20000000];
                break;
            default:
                price = null;
        }
        const whereClause = {
            type: "laptop",
            ten: {
                [Op.iLike]: `%${brand}%`
            }
        };
        if (price) {
            if (price.length === 2) {
                whereClause.gia = {
                    [Op.between]: price
                };
            } else if (price.length === 1) {
                whereClause.gia = {
                    [Op.gte]: price[0]
                };
            }
        }
        try {
            const result = await Product.findAll({
                where: whereClause
            });
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Lỗi truy vấn" });
        }
    },
    getCamera: async (req, res) => {
        const mucGia = req.query.mucGia;
        let price = null;
        switch (mucGia) {
            case "0-500":
                price = [0, 500000];
                break;
            case "500-600":
                price = [500000, 600000];
                break;
            case "tren-600":
                price = [600000];
                break;
            default:
                price = null;
        }
        const whereClause = {
            type: "camera"
        };
        if (price) {
            if (price.length === 2) {
                whereClause.gia = {
                    [Op.between]: price
                };
            } else if (price.length === 1) {
                whereClause.gia = {
                    [Op.gte]: price[0]
                };
            }
        }
        try {
            const result = await Product.findAll({
                where: whereClause
            });
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Lỗi truy vấn" });
        }
    },
    getCameraByBrand: async (req, res) => {
        const brand = req.query.brand.toLowerCase();
        const mucGia = req.query.mucGia;
        let price = null;
        switch (mucGia) {
            case "0-500":
                price = [0, 500000];
                break;
            case "500-600":
                price = [500000, 600000];
                break;
            case "tren-600":
                price = [600000];
                break;
            default:
                price = null;
        }
        const whereClause = {
            type: "camera",
            ten: {
                [Op.iLike]: `%${brand}%`
            }
        };
        if (price) {
            if (price.length === 2) {
                whereClause.gia = {
                    [Op.between]: price
                };
            } else if (price.length === 1) {
                whereClause.gia = {
                    [Op.gte]: price[0]
                };
            }
        }
        try {
            const result = await Product.findAll({
                where: whereClause
            });
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Lỗi truy vấn" });
        }
    },
    getRandom: async (req, res) => {
        const result = await Product.findAll({
            order: sequelize.literal('RANDOM()'),
            limit: 8
        });
        res.json(result);
    },
    getProductDetail: async (req, res) => {
        const result = await Product.findAll({
            where: {
                id: `${req.query.id}`
            }
        });
        res.json(result);
    },
    search: async (req, res) => {
        const results = await Product.findAll({
            where: {
                ten: {
                    [Op.iLike]: `%${req.query.keyword}%`
                }
            }
        });
        res.json(results);
    }
}
export default productController;