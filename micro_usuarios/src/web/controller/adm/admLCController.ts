import type { RequestHandler } from "express";
import * as admLoginService from "../../service/adm/admService";

export const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.body.email);
    const senha = String(req.body.senha);

    const result = await admLoginService.login(email, senha);

    if (!result) {
      res.status(401).json({ message: "Email ou senha inválidos!" });
      return;
    }

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({
      message: `Erro de login: ${e}`,
    });
  }
};

export const cadastro: RequestHandler = async (req, res) => {
  try {
    const { nome, email, senha, telefone, cargo, permissao_nivel } = req.body;

    const novoUsuario = await admLoginService.criarAdministrador({
      nome,
      email,
      senha,
      telefone,
      cargo,
      permissao_nivel,
    });

    res.status(201).json({
      message: "Administrador cadastrado com sucesso!",
      usuario: novoUsuario,
    });
  } catch (e) {
    res.status(500).json({
      message: `Erro no cadastro: ${e}`,
    });
  }
};