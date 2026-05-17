import banco from "../banco.js";
import { DataTypes } from "sequelize";

const Exemplar = banco.define(
    'exemplar',
    {
        idexemplar: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idobra: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {

    },
);

export default Exemplar;