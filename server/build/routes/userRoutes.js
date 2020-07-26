"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.GetAll);
        this.router.get('/:id_user', userController_1.userController.Get);
        this.router.put('/edit', userController_1.userController.Update);
    }
}
const userRoutes = new UserRoutes();
exports.default = userRoutes.router;
