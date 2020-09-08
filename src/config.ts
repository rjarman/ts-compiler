import fs = require('fs');
import ini = require('ini');
let config = ini.parse(fs.readFileSync(__dirname + '/../server.ini', 'utf-8'));

export const SERVER = {
    address: config.SERVER.address,
    port: parseInt(config.SERVER.port)
}

export const DATABASE = {
    name: config.DATABASE.name
}