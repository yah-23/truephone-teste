const dbConnection = require('../config/dbConnection');
const { DataTypes } = require("sequelize");

const Mensagem = dbConnection.define(
    'Mensagem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mensagem: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        valido: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        codigoArquivo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        table: 'mensagens'
    }
)

module.exports = Mensagem;