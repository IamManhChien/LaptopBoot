import { QueryTypes } from "sequelize";
import sequelize from '../models/db.js';
import initModels from '../models/init-models.js';
const models = initModels(sequelize);
let order = null;
const cartController = {
    getCart: async (req, res) => {
        try {
            order = await models.orders.findOne({
                where: {
                    userid: req.user.username,
                    status: 'pending'
                }
            });
            if (!order) {
                order = await models.orders.create({
                    userid: req.user.username,
                    status: "pending",
                    total_price: 0
                });
            }
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
            order = await models.orders.findOne({
                where: {
                    userid: req.user.username,
                    status: 'pending'
                }
            });
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
                    price: Number(req.body.product.gia.replace(/[^\d]/g, ''))
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
            order = await models.orders.findOne({
                where: {
                    userid: req.user.username,
                    status: 'pending'
                }
            });
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
                    price: Number(req.body.product.gia.replace(/[^\d]/g, ''))
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
    checkOut: async (req, res) => {
        try {
            let result = await models.order_items.findAll({ where: { order_id: order.id } });
            let total_price = 0;
            result.forEach(
                async (item) => {
                    total_price += item.quantity * item.price;
                    let tmp = await models.products.findOne({ where: { id: item.product_id } });
                    tmp.soluong = tmp.soluong - item.quantity;
                    await tmp.save();
                }
            )
            order.total_price = total_price;
            order.payment_method = req.body.paymentMethod;
            order.shipping_address = req.body.address;
            order.note = req.body.note;
            order.status = "confirmed"
            await order.save();
            order = null;
            res.status(200).json({ order: order, order_item: result });
        } catch (error) {
            console.log(error);
            res.status(404).json(error)
        }
    }
}
export default cartController;