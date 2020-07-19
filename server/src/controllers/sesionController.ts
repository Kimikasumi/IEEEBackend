import {Request, Response, json} from 'express';
import db from '../database';

class SesionController
{
    public async iniciarSesion(req: Request, res: Response)
    {
        const correo = req.body.correo;
        const clave = req.body.clave;
        const usuario = await db.query("SELECT * FROM usuario WHERE correo='"+correo+"' AND clave='"+clave+"'");
        if(usuario[0] == null)
        {
           return res.json({text: 'Usuario o contraseña incorrecto'});
        }
        return res.json(usuario[0]);
    }
}
export const sesionController = new SesionController(); 