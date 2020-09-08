import express = require('express')
import { Request, Response} from 'express'

import { ServerArg } from '../templates/InitServer'
import { SERVER } from '../config'

export class App {

    private __port = SERVER.port;
    private __address = SERVER.address;

    private __app: express.Application;
    private __middleware: [any];
    private __handlers: [any];
    private __assetsPath: [any];

    constructor(serverArg: ServerArg) {
        this.__app = express()
        this.__middleware = serverArg.middleware;
        this.__assetsPath = serverArg.assetsPath;
        this.__handlers = serverArg.handlers;
        
        this.__loadMiddleware();
        this.__loadAssets();
        this.__loadHandlers();
    }

    private __loadMiddleware(): void {
        this.__middleware.forEach(middleware => {
            this.__app.get(middleware);
        });
    }

    private __loadHandlers(): void {
        this.__handlers.forEach(handler => {
            this.__app.use('/', handler);
        });
    }

    private __loadAssets(): void {
        this.__assetsPath.forEach(path => {
                this.__app.use(express.static(__dirname + path));
            // console.log(__dirname + path)
        });
    }

    listen(): void {
        this.__app.listen(this.__port, this.__address, () => {
            console.log('Server started...')
            console.log(`Server Credentials:
            Address: ${this.__address}
            Port: ${this.__port}`)
        });
    }
}