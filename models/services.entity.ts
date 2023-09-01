import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface IServices {
    id: number;
    maquina: number;
    cliente: number;
    defeito: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type ServiceCreationAttributes = Optional<IServices, 'id'>

export class Service extends Model<IServices, ServiceCreationAttributes> implements IServices {
    public id!:number;
    public maquina!:number;
    public cliente!:number;
    public defeito!: string;
    public createdAt!:Date;
    public updatedAt!:Date;
}

Service.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    maquina: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    defeito: {
      type: DataTypes.STRING,
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
    tableName: 'services',
    modelName: 'service'
})