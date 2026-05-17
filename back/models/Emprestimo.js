import banco from "../banco.js";
import { DataTypes } from "sequelize";

const Emprestimo = banco.define(
    'emprestimo',
    {
        idemprestimo: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idexemplar: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        idusuario: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        emprestimo: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        vencimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        devolucao: {
            type: DataTypes.DATEONLY,
            allowNull: true
        }
    },
    {

    },
);

export default Emprestimo;