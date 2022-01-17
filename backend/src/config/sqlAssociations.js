const Arquivo = require('../models/Arquivo');
const Mensagem = require('../models/Mensagem');

Arquivo.hasMany(Mensagem, {
    foreignKey: 'codigoArquivo',
});

Mensagem.belongsTo(Arquivo, {
    foreignKey: 'codigoArquivo'
})