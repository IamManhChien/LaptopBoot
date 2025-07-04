import { Op, QueryTypes } from "sequelize";
import sequelize from '../models/db.js';
import initModels from '../models/init-models.js';
const models = initModels(sequelize);
let order = null;
let orders = [];
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
    changeQuantity: async (req, res) => {
        try {
            let result = await models.order_items.findOne({ where: { order_id: order.id, product_id: req.query.product_id } });
            if (req.query.action == 'add') {
                result.quantity += 1;
            } else if (req.query.action == 'sub') {
                if (result.quantity > 1)
                    result.quantity -= 1;
                else {
                    result.destroy();
                }
            }
            await result.save();
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
            for (const item of result) {
                total_price += item.quantity * item.price;
                const tmp = await models.products.findOne({ where: { id: item.product_id } });
                if (tmp.soluong >= item.quantity) {
                    tmp.soluong -= item.quantity;
                    await tmp.save();
                } else {
                    throw new Error(`Sản phẩm ${item.product_id} trong kho không đủ`);
                }
            }
            order.total_price = total_price;
            order.payment_method = req.body.paymentMethod;
            order.shipping_address = req.body.address;
            order.note = req.body.note;
            order.status = "confirmed"
            await order.save();
            order = null;
            res.status(200).json({ order: order, order_item: result });
        } catch (error) {
            res.status(404).json({err: `${error}`})
        }
    },
    getOrder: async (req, res) => {
        try {
            orders = await models.orders.findAll({
                where: {
                    userid: req.user.username,
                    status: {
                        [Op.ne]: 'pending'
                    },
                }
            });
            const result = await Promise.all(
                orders.map(async (order) => {
                    let tmp = order.toJSON();
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
                    tmp.items = items;
                    return tmp;
                })
            );


            return res.status(200).json(result);
        } catch (error) {
            console.log(error);

            res.status(404).json(error)
        }

    },
}
export default cartController;