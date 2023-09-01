import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IProduct {
    id: number;
    produto: string;
    marca: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type ProductCreationAttributes = Optional<IProduct, 'id'>

export class Product extends Model<IProduct, ProductCreationAttributes> implements IProduct {
    public id!:number;
    public produto!:string;
    public marca!:string;
    public createdAt!:Date;
    public updatedAt!:Date;
}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    produto: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    marca: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'brands',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
},{
    sequelize,
    tableName: 'products',
    modelName: 'product'
})