import {Request, Response} from 'express';

class IndexController
{
    index(req: Request, res: Response)
    {
        res.json({text: 'Servicios DMT2'})
    }
}

export const indexController = new IndexController();