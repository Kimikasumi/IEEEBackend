import {Router} from 'express';

import {userController} from '../controllers/userController';

class UserRoutes
{
    public router: Router = Router();

    constructor()
    {
        this.config();
    }

    config() : void
    {
        this.router.get('/',userController.GetAll);
        this.router.get('/:id_user',userController.Get);
        this.router.put('/edit',userController.Update);
    }
}

const userRoutes = new UserRoutes();
export default userRoutes.router;