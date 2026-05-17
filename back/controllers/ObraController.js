import Obra from "../models/Obra.js";

async function listar(req, res) {
    const dados = await Obra.findAll();
    res.json(dados);
};

async function selecionar(req, res) {
    try {
        const { idobra } = req.params;
        const idObraNumero = Number(idobra);

        if (!Number.isInteger(idObraNumero)) {
            return res.status(400).json({
                mensagem: "ID inválido. Deve ser um número inteiro."
            });
        }

        const obra = await Obra.findByPk(idObraNumero);

        if (!obra) {
            return res.status(404).json({ mensagem: "Obra não encontrada" });
        }

        res.json(obra);

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar obra" });
    }
};

async function excluir(req, res) {
    try {
        const { idobra } = req.params;
        const idObraNumero = Number(idobra);

        if (!Number.isInteger(idObraNumero)) {
            return res.status(400).json({
                mensagem: "ID inválido. Deve ser um número inteiro."
            });
        }

        const obra = await Obra.destroy({
            where: { idobra: idObraNumero }
        });

        if (!obra) {
            return res.status(404).json({ mensagem: "Obra não encontrada" });
        }

        res.json("Obra " + idObraNumero + " deletada com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao excluir obra" });
    }
};

async function inserir(req, res) {
    try {
        const { titulo, autor, isbn, editora, publicacao, edicao, categoria, foto } = req.body;

        const obra = await Obra.create({
            titulo,
            autor,
            isbn,
            editora,
            publicacao,
            edicao,
            categoria,
            foto
        });

        res.json("Obra '" + titulo + "' criada com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao criar obra: " + erro });
    }
};

async function alterar(req, res) {
    try {
        const { idobra } = req.params;
        const idObraNumero = Number(idobra);

        const { titulo, autor, isbn, editora, publicacao, edicao, categoria, foto } = req.body;

        if (!Number.isInteger(idObraNumero)) {
            return res.status(400).json({
                mensagem: "ID inválido. Deve ser um número inteiro."
            });
        }

        const atualizado = await Obra.update(
            {
                titulo,
                autor,
                isbn,
                editora,
                publicacao,
                edicao,
                categoria,
                foto
            },
            {
                where: { idobra: idObraNumero }
            }
        );

        if (atualizado[0] === 0) {
            return res.status(404).json({ mensagem: "Obra não encontrada" });
        }

        res.json("Obra " + idObraNumero + " alterada com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao alterar obra: " + erro });
    }
};

export default { listar, selecionar, excluir, inserir, alterar };