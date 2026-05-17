import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();
const banco = new Sequelize(process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    dialect: "postgres",
    host: process.env.DB_HOST,
    define: {
        timestamps: false,
        freezeTableName: true
    }
});
try{
    await banco.authenticate();
    console.log('Conctado');
} catch(error){
    console.log('Erro ao conectar');
}
export default banco;
