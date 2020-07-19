import {Request, Response, json} from 'express';
import db from '../database';

class SesionController
{
    public async IniciarSesion(req: Request, res: Response)
    {
        const name_user = req.body.name_user;
        const u_password = req.body.u_password;
        const usuario = await db.query("SELECT * FROM the_user WHERE name_user='"+name_user+"' AND u_password='"+u_password+"'");
        if(usuario[0] == null)
        {
           return res.json({text: 'Usuario o contraseña incorrecto'});
        }
        return res.json(usuario[0]);
    }
}
export const sesionController = new SesionController(); 