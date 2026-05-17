import Exemplar from "../models/Exemplar.js";
import Obra from "../models/Obra.js";

async function listar(req,res)  {
    const dados = await Exemplar.findAll();
    res.json(dados);
};

async function selecionar(req,res) {
    try {
        const { idexemplar } = req.params;

        const idNumero = Number(idexemplar);

        if (!Number.isInteger(idNumero)) {
            return res.status(400).json({ 
                mensagem: "ID inválido. Deve ser um número inteiro." 
            });
        }

        const exemplar = await Exemplar.findByPk(idNumero);

        if (!exemplar) {
            return res.status(404).json({ mensagem: "Exemplar não encontrado" });
        }

        res.json(exemplar);

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar exemplar" });
    }
};

async function excluir(req,res) {
    try {
        const { idexemplar } = req.params;

        const idNumero = Number(idexemplar);

        if (!Number.isInteger(idNumero)) {
            return res.status(400).json({ 
                mensagem: "ID inválido. Deve ser um número inteiro." 
            });
        }

        const exemplar = await Exemplar.destroy({where: {idexemplar: idNumero}});

        if (!exemplar) {
            return res.status(404).json({ mensagem: "Exemplar não encontrado" });
        }

        res.json("Exemplar " + idNumero +  " deletado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao excluir exemplar" });
    }
};

async function inserir(req,res) {
    try {
        const idobra = req.body.idobra;
        const status = req.body.status;

        const obra = await Obra.findByPk(idobra);
        
        if (!obra){
            return res.status(404).send('Obra não encontrada')
        }

        await Exemplar.create({
            idobra,
            status
        });
        
        res.json("Exemplar criado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao criar exemplar " + erro});
    }
};

async function alterar(req,res) {
    try {
        const { idexemplar } = req.params;

        const idNumero = Number(idexemplar);
        const idobra = req.body.idobra;
        const status = req.body.status;

        await Exemplar.update(
            { idobra, status },
            { where:{idexemplar: idNumero} }
        );
        
        res.json("Exemplar " + idNumero +  " alterado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao alterar exemplar " + erro});
    }
};

export default {listar, selecionar, excluir, inserir, alterar};