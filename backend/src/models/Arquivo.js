const dbConnection = require('../config/dbConnection');
const { DataTypes } = require("sequelize");

const Arquivo = dbConnection.define(
    'Arquivo', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        nomeArquivo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        table: 'arquivos'
    }
)

module.exports = Arquivo;