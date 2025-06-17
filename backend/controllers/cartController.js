import { QueryTypes } from "sequelize";
import sequelize from '../models/db.js';
import initModels from '../models/init-models.js';
const models = initModels(sequelize);
let order = null;
const cartController = {
    getCart: async (req, res) => {
        try {
            order = await models.orders.findOne({ where: { userid: req.user.username } });
            if (!order) {
                order = await models.orders.create({
                    userid: req.user.username,
                    status: "pending",
                    total_price: 0
                });
            }
            // const items = await OrderItem.findAll({ where: { order_id: order.id } });
            // let result = [];
            // for(let i = 0 ; i< items.length;i++){
            //     result.push(await Product.findOne({where:{id:items[i].product_id}}));
            // }
            const items = await models.order_items.findAll({
                where: { order_id: order.id },
                include: [
                    {
                        model: models.products,
                        as: 'product',
                        attributes: ['ten', 'img', 'soluong']
                    }
                ]
            });
            return res.status(200).json(items);
        } catch (error) {
            console.log(error);

            res.status(404).json(error)
        }

    },
    addItem: async (req, res) => {
        try {
            order = await models.orders.findOne({ where: { userid: req.user.username } });
            if (!order) {
                order = await models.orders.create({
                    userid: req.user.username,
                    status: "pending",
                    total_price: 0
                });
            }
            console.log(req.body.product);
            let result = await models.order_items.findOne({ where: { order_id: order.id, product_id: req.body.product.id } });
            if (!result) {
                result = await models.order_items.create({
                    order_id: order.id,
                    product_id: req.body.product.id,
                    quantity: 1,
                    price: Number(req.body.product.gia.replace(/\D/g, ""))
                });
                console.log(result);
                return res.status(200).json(result);
            }
            result.quantity = result.quantity + 1;
            await result.save();
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(404).json(error)
        }

    },
    buyNow: async (req, res) => {
        try {
            order = await models.orders.findOne({ where: { userid: req.user.username } });
            if (!order) {
                order = await models.orders.create({
                    userid: req.user.username,
                    status: "pending",
                    total_price: 0
                });
            }
            let result = await models.order_items.findOne({ where: { order_id: order.id, product_id: req.body.product.id } });
            if (!result) {
                result = await models.order_items.create({
                    order_id: order.id,
                    product_id: req.body.product.id,
                    quantity: 1,
                    price: Number(req.body.product.gia.replace(/\./g, ""))
                });
                console.log(result);
                return res.status(200).json(result);
            }
            result.quantity = result.quantity + 1;
            await result.save();
            const items = await models.order_items.findAll({
                where: { order_id: order.id },
                include: [
                    {
                        model: models.products,
                        as: 'product',
                        attributes: ['ten', 'img', 'soluong']
                    }
                ]
            });
            res.status(200).json(items);
        } catch (error) {
            console.log(error);
            res.status(404).json(error)
        }

    },
    removeItem: async (req, res) => {
        try {
            let result = await models.order_items.findOne({ where: { order_id: order.id, product_id: req.query.product_id } });
            await result.destroy();
            res.status(200).json(result);
        } catch (error) {
            console.log(error);

            res.status(404).json(error)
        }
    },
    getLaptop: async (req, res) => {
        const result = await sequelize.query("SELECT * FROM products WHERE type='laptop'", {
            type: QueryTypes.SELECT
        });
        res.json(result);
    },

}
export default cartController;