import banco from "../banco.js";
import { DataTypes } from "sequelize";

const Aluno = banco.define(
    'aluno',
    {
        matricula:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING
        }
    },
    {

    },
);

export default Aluno;