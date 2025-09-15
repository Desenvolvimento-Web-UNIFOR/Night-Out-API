import type { RequestHandler } from "express";
import * as usuarioLoginService from "../service/usuarioLoginService";

export const login: RequestHandler = async (req, res) => {
  try {
    const name = String(req.body.name);
    const password = String(req.body.password);

    const result = await usuarioLoginService.login(name, password);

    if (!result) {
      res.status(401).json({ message: "Usuário ou senha inválidos" });
      return;
    }

    res.status(200).json({ message: result });
  } catch (e) {
    res.status(500).json({
      message: `Erro de login: ${e}`,
    });
  }
};
