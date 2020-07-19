import {Router} from 'express';

import {pacienteController} from '../controllers/pacienteController';

class PacienteRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config() : void
    {
        this.router.get('/', pacienteController.listarPacientes);
        this.router.get('/:cedula', pacienteController.obtenerPaciente);
        this.router.post('/crear', pacienteController.crearPaciente);
        this.router.put('/inactivar/:cedula', pacienteController.inactivarPaciente);
        this.router.put('/actualizar/:cedula', pacienteController.actualizarPaciente);
    }
}

const pacienteRoutes = new PacienteRoutes();
export default pacienteRoutes.router;