import { QueryTypes, Op } from "sequelize";
import sequelize from '../models/db.js';
import Product from '../models/products.js';
const productController = {
    getLaptop: async (req, res) => {
        const result = await Product.findAll({
            where: {
                type: 'laptop'
            }
        });
        res.json(result);
    },
    getCamera: async (req, res) => {
        const result = await Product.findAll({
            where: {
                type: 'camera'
            }
        });
        res.json(result);
    },
    getRandom: async (req, res) => {
        const result = await Product.findAll({
            order: sequelize.literal('RANDOM()'),
            limit: 8
        });
        res.json(result);
    },
    getProduct: async (req, res) => {
        const result = await Product.findAll({
            where: {
                id: `${req.query.id}`
            }
        });
        res.json(result);
    },
    search: async (req, res) => {
        console.log(req.query.keyword);
        const results = await Product.findAll({
            where: {
                [Op.or]: [
                    {
                        ten: {
                            [Op.iLike]: `%${req.query.keyword}%`
                        }
                    }
                ]
            }
        });
        res.json(results);
    }
}
export default productController;