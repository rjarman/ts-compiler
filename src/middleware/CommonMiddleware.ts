import _bodyParser = require('body-parser')
import { Request, Response} from 'express'

export const bodyParser = () => {
    _bodyParser.json();
    _bodyParser.urlencoded({extended: true});
}

export const permissions = (req: Request, res: Response, next: Function) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    next();
};