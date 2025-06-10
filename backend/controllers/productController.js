import { QueryTypes } from "sequelize";
import sequelize from '../models/db.js';
const productController = {
    getLaptop: async (req, res) => {
        const result = await sequelize.query("SELECT * FROM products WHERE type='laptop'", {
            type: QueryTypes.SELECT
        });
        res.json(result);
    },
    getCamera: async (req, res) => {
        const result = await sequelize.query("SELECT * FROM products WHERE type='camera'", {
            type: QueryTypes.SELECT
        });
        res.json(result);
    },
    getRandom: async (req, res) => {
        const result = await sequelize.query("SELECT * FROM products ORDER BY RANDOM() LIMIT 8;", {
            type: QueryTypes.SELECT
        });
        res.json(result);
    },
    getProduct: async (req, res) => {
        const result = await sequelize.query("SELECT * FROM products WHERE id= (?)", {
            replacements: [req.query.id],
            type: QueryTypes.SELECT
        });
        res.json(result);
    },
    search: (req, res) => {
        console.log(req.query.key);
        res.json({ data: 'Ket qua tim kiem cho ' + req.query.key })
    }
}
export default productController;