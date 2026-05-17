import Usuario from "../models/Usuario.js";

async function listar(req, res) {
    const dados = await Usuario.findAll();
    res.json(dados);
};

async function selecionar(req, res) {
    try {
        const { idusuario } = req.params;
        const idUsuarioNumero = Number(idusuario);

        if (!Number.isInteger(idUsuarioNumero)) {
            return res.status(400).json({
                mensagem: "ID inválido. Deve ser um número inteiro."
            });
        }

        const usuario = await Usuario.findByPk(idUsuarioNumero);

        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        res.json(usuario);

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar usuário" });
    }
};

async function excluir(req, res) {
    try {
        const { idusuario } = req.params;
        const idUsuarioNumero = Number(idusuario);

        if (!Number.isInteger(idUsuarioNumero)) {
            return res.status(400).json({
                mensagem: "Usuário inválido. Deve ser um número inteiro."
            });
        }

        const usuario = await Usuario.destroy({
            where: { idusuario: idUsuarioNumero }
        });

        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        res.json("Usuário " + idUsuarioNumero + " deletado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao excluir usuário" });
    }
};

async function inserir(req, res) {
    try {
        const { nome, email, matricula, perfil, status } = req.body;

        const usuario = await Usuario.create({
            nome,
            email,
            matricula,
            perfil,
            status
        });

        res.json("Usuário " + nome + " criado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao criar usuário: " + erro });
    }
};

async function alterar(req, res) {
    try {
        const { idusuario } = req.params;
        const idUsuarioNumero = Number(idusuario);

        const { nome, email, matricula, perfil, status } = req.body;

        if (!Number.isInteger(idUsuarioNumero)) {
            return res.status(400).json({
                mensagem: "ID inválido. Deve ser um número inteiro."
            });
        }

        const atualizado = await Usuario.update(
            {
                nome,
                email,
                matricula,
                perfil,
                status
            },
            {
                where: { idusuario: idUsuarioNumero }
            }
        );

        if (atualizado[0] === 0) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        res.json("Usuário " + idUsuarioNumero + " alterado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao alterar usuário: " + erro });
    }
};

export default { listar, selecionar, excluir, inserir, alterar };