import { DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../db';

interface IUser{
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    endereco: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserCreationAttributes = Optional<IUser, 'id'>;

export class User extends Model<IUser, UserCreationAttributes> {
    public id!:number;
    public nome!:string;
    public cpf!:string;
    public telefone!:string;
    public endereco!:string;
    public createdAt!:Date;
    public updatedAt!:Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
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
}, {
    sequelize,
    tableName: 'users',
    modelName: 'user'
})