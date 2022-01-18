const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const dbConnection = require('../config/dbConnection');

const Arquivo = require('../models/Arquivo')
const Mensagem = require('../models/Mensagem')

exports.validation = async(request, response) => {
    try {
        const { file } = request;
        const rows = [];

        fs.createReadStream((path.resolve(file.path)))
            .pipe(csv.parse({ ignoreEmpty: true, delimiter: ';' }))
            .validate(data => data[0].length == 11 && data[0][2] == '9' && data[1].length <= 160)
            .on('error', error => console.error(error))
            .on('data', row => rows.push({ telefone: row[0], mensagem: row[1], valido: true }))
            .on('data-invalid', (row) => rows.push({ telefone: row[0], mensagem: row[1], valido: false }))
            .on('end', () => {
                fs.unlinkSync(file.path)
                response.status(200).send({ data: rows, file })
            });
    } catch (error) {
        response.status(500).send({error})
    }
}

exports.insertDb = async(request, response) => {
    try {
        const {data, file} = request.body
        
        const dataCreated = await Arquivo.create({ nomeArquivo: file['filename'], data: new Date() })
        const arquivo = dataCreated.get();
        const { id } = arquivo;
        
        const mappedData = data.map(element => {
            return { ...element, codigoArquivo: id }
        })

        await Mensagem.bulkCreate(mappedData)
        
        response.status(200).send({message: 'Dados salvos com sucesso!'})
    } catch (error) {
        response.status(500).send({error})
    }
}