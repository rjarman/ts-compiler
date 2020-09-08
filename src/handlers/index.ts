import {Request, Response} from 'express';

export const indexURL = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Rafsun' Server!"
    });
}