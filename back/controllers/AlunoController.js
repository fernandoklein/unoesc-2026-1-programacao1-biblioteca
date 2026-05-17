import Aluno from "../models/Aluno.js";

async function listar(req,res)  {
    const dados = await Aluno.findAll();
    res.json(dados);
};

async function selecionar(req,res) {
    try {
        const { matricula } = req.params;

        const matriculaNumero = Number(matricula);

        // valida se é número inteiro
        if (!Number.isInteger(matriculaNumero)) {
            return res.status(400).json({ 
                mensagem: "Matrícula inválida. Deve ser um número inteiro." 
            });
        }

        const aluno = await Aluno.findByPk(matriculaNumero);

        if (!aluno) {
            return res.status(404).json({ mensagem: "Aluno não encontrado" });
        }

        res.json(aluno);

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar aluno" });
    }
};

async function excluir(req,res) {
    try {
        const { matricula } = req.params;

        const matriculaNumero = Number(matricula);

        // valida se é número inteiro
        if (!Number.isInteger(matriculaNumero)) {
            return res.status(400).json({ 
                mensagem: "Matrícula inválida. Deve ser um número inteiro." 
            });
        }

        const aluno = await Aluno.destroy({where: {matricula: matriculaNumero}});

        if (!aluno) {
            return res.status(404).json({ mensagem: "Aluno não encontrado" });
        }

        res.json("Aluno " + matriculaNumero +  " deletado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar aluno" });
    }
};

async function inserir(req,res) {
    try {
        const nome = req.body.nome;
        const email = req.body.email;

        const aluno = await Aluno.create({
            "nome": nome,
            "email": email
        });
        
        res.json("Aluno " + nome +  " criado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao criar aluno" + erro});
    }
};

async function alterar(req,res) {
    try {
        const { matricula } = req.params;

        const matriculaNumero = Number(matricula);
        const nome = req.body.nome;
        const email = req.body.email;

        const aluno = await Aluno.update({
            "nome": nome,
            "email": email
        },
        {
            where:{matricula: matriculaNumero}
        });
        
        res.json("Aluno " + matriculaNumero +  " alterado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao alterar aluno" + erro});
    }
};

export default {listar, selecionar, excluir, inserir, alterar};