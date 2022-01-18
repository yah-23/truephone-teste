const Arquivo = require('../models/Arquivo');
const Mensagem = require('../models/Mensagem');

Arquivo.hasMany(Mensagem, {
    foreignKey: {
        name: 'codigoArquivo',
        allowNull: false
    },
});

Mensagem.belongsTo(Arquivo, {
    foreignKey: {
        name: 'codigoArquivo',
        allowNull: false
    }
})