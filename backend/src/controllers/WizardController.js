const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

const dbConnection = require('../config/dbConnection');


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
                response.status(200).send({ data: rows })
            });
    } catch (error) {
        response.status(500).send({error})
    }
}