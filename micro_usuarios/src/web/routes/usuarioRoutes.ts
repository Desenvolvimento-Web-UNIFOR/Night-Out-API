import { Router } from "express";
import { login } from "../controller/usuarioLoginController";

const UsuarioRoutes = Router();

UsuarioRoutes.post("/", login);

export default UsuarioRoutes;
