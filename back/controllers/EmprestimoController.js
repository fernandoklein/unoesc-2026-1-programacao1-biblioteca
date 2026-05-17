import Emprestimo from "../models/Emprestimo.js";
import Exemplar from "../models/Exemplar.js";
import Usuario from "../models/Usuario.js";
import moment from "moment"

async function listar(req,res)  {
    const dados = await Emprestimo.findAll();
    res.json(dados);
};

async function selecionar(req,res) {
    try {
        const { idemprestimo } = req.params;

        const idNumero = Number(idemprestimo);

        if (!Number.isInteger(idNumero)) {
            return res.status(400).json({ 
                mensagem: "ID inválido. Deve ser um número inteiro." 
            });
        }

        const emprestimo = await Emprestimo.findByPk(idNumero);

        if (!emprestimo) {
            return res.status(404).json({ mensagem: "Empréstimo não encontrado" });
        }

        res.json(emprestimo);

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar empréstimo" });
    }
};

async function emprestar(req,res) {
    try {
        const idexemplar = req.body.idexemplar;
        const idusuario = req.body.idusuario;
        const usuario = await Usuario.findByPk(idusuario);
        const exemplar =  await Exemplar.findByPk(idexemplar);

        if(!exemplar){
            return res.status(404).send('Exemplar não encontrado');
        }
        if(exemplar.status === 1){
            return res.status(400).send('Exemplar já emprestado.');
        }
        if(!usuario){
            return res.status(404).send('Usuário não encontrado');
        }
        //Variavel dias para devolucao
        let dias_emprestimo = 7
        if(usuario.perfil === 0){
            dias_emprestimo = 7;
        }else if (usuario.perfil === 1){
            dias_emprestimo = 15;
        }

        const emprestimo = moment().format('YYYY-MM-DD');
        const vencimento = moment().add(dias_emprestimo, 'days').format('YYYY-MM-DD')

        await Emprestimo.create({
            idexemplar,
            idusuario,
            emprestimo,
            vencimento
        });

        exemplar.update({status: 1});
        
        res.json("Empréstimo criado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao criar empréstimo " + erro});
    }
};

async function alterar(req,res) {
    try {
        const { idemprestimo } = req.params;

        const idNumero = Number(idemprestimo);
        const idexemplar = req.body.idexemplar;
        const idusuario = req.body.idusuario;
        const vencimento = req.body.vencimento;
        const devolucao = req.body.devolucao;

        await Emprestimo.update(
            { idexemplar, idusuario, vencimento, devolucao },
            { where:{idemprestimo: idNumero} }
        );
        
        res.json("Empréstimo " + idNumero +  " alterado com sucesso.");

    } catch (erro) {
        res.status(500).json({ erro: "Erro ao alterar empréstimo " + erro});
    }
};

async function devolver(req, res) {
    try {
        const { idemprestimo } = req.params;

        const idNumero = Number(idemprestimo);

        // Validar se é número válido
        if (!Number.isInteger(idNumero)) {
            return res.status(400).json({
                mensagem: "ID inválido. Deve ser um número inteiro."
            });
        }

        // Buscar empréstimo
        const emprestimo = await Emprestimo.findByPk(idNumero);

        if (!emprestimo) {
            return res.status(404).json({
                mensagem: "Empréstimo não encontrado."
            });
        }

        // Verificar se já foi devolvido
        if (emprestimo.devolucao) {
            return res.status(400).json({
                mensagem: "Este empréstimo já foi devolvido anteriormente."
            });
        }

        // Buscar exemplar
        const exemplar = await Exemplar.findByPk(emprestimo.idexemplar);

        if (!exemplar) {
            return res.status(404).json({
                mensagem: "Exemplar vinculado não encontrado."
            });
        }

        // Atualizar data de devolução
        const dataDevolucao = moment().format('YYYY-MM-DD');

        await Emprestimo.update(
            { devolucao: dataDevolucao },
            { where: { idemprestimo: idNumero } }
        );

        // Atualizar status do exemplar para disponível
        await exemplar.update({ status: 0 });

        res.json("Devolução realizada com sucesso.");

    } catch (erro) {
        res.status(500).json({
            erro: "Erro ao realizar devolução: " + erro
        });
    }
}

export default {listar, selecionar, emprestar, alterar, devolver};