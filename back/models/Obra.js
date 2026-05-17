import banco from "../banco.js";
import { DataTypes } from "sequelize";

const Obra = banco.define(
    'obra',
    {
        idobra:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        autor:{
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn:{
            type: DataTypes.STRING,
            allowNull: false
        },
        editora:{
            type: DataTypes.STRING,
            allowNull: false
        },
        publicacao:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        edicao:{
            type: DataTypes.STRING,
            allowNull:false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull:false
        },
        foto:{
            type: DataTypes.TEXT
        }
        
    },
    {

    },
);

export default Obra;