import { QueryTypes } from "sequelize";
import sequelize from '../models/db.js';
import Order from "../models/orders.js";
import OrderItem from "../models/order_items.js";
const cartController = {
    getCart: async (req, res) => {
            console.log(req.user.username);
            const order = Order.findOne({where:{userid:req.user.username}});
            if(!order){
                const tmp = Order.create({
                    userid:req.user.username,
                    status: "pending",
                    total_price: 0
                });
            }
            const item = OrderItem.findAll({where:{orderid_id}})

            const result = await sequelize.query("SELECT * FROM products WHERE type='laptop'", {
            type: QueryTypes.SELECT
        });
        res.json(result);
    },
    getLaptop: async (req, res) => {
        const result = await sequelize.query("SELECT * FROM products WHERE type='laptop'", {
            type: QueryTypes.SELECT
        });
        res.json(result);
    },

}
export default cartController;