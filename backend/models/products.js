import { DataTypes } from 'sequelize';
import sequelize from './db.js';
const Product = sequelize.define('products', {
    id: {
      type: DataTypes.TEXT,
      allowNull: false,
      primaryKey: true
    },
    ten: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gia: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mota: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    soluong: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "products_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
export default Product;
