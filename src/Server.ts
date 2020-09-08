import { App } from './libs/Application';
import {bodyParser, permissions} from './middleware/CommonMiddleware';
import {indexURL} from './handlers/index'

let application = new App({
    middleware: [
        bodyParser, 
        permissions
    ],
    assetsPath: ['./../../public'],
    handlers: [indexURL], 
});
application.listen();