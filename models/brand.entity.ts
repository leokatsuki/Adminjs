import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IBrand {
    id: number;
    marca: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type BrandCreationAttributes = Optional<IBrand, 'id'>

export class Brand extends Model<IBrand, BrandCreationAttributes> implements IBrand {
    public id!:number;
    public marca!:string;
    public createdAt!:Date;
    public updatedAt!:Date;
}

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
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
    tableName: 'brands',
    modelName: 'brand'
})