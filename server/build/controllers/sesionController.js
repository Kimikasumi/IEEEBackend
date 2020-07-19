"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sesionController = void 0;
const database_1 = __importDefault(require("../database"));
class SesionController {
    iniciarSesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const correo = req.body.correo;
            const clave = req.body.clave;
            const usuario = yield database_1.default.query("SELECT * FROM usuario WHERE correo='" + correo + "' AND clave='" + clave + "'");
            if (usuario[0] == null) {
                return res.json({ text: 'Usuario o contraseña incorrecto' });
            }
            return res.json(usuario[0]);
        });
    }
}
exports.sesionController = new SesionController();
