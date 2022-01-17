const server = require('./src/config/server');
const dbConnection = require('./src/config/dbConnection');
const _PORT = process.env._PORT;

server.listen(_PORT, async () => {
    console.log(`Server running at http://localhost:${_PORT}`);

    try {
        await dbConnection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})