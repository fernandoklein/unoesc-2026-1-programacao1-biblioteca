import express from "express";
//import dotenv from "dotenv";
import AlunoController from "./controllers/AlunoController.js"
import UsuarioController from "./controllers/UsuarioController.js";
import ObraController from "./controllers/ObraController.js";
import EmprestimoController from "./controllers/EmprestimoController.js";
import ExemplarController from "./controllers/ExemplarController.js";
import cors from "cors";

//dotenv.config();

const api = express();
api.use(express.json());
api.use(cors());

api.get('/aluno', AlunoController.listar);
api.get('/aluno/:matricula', AlunoController.selecionar);
api.delete('/aluno/:matricula', AlunoController.excluir);
api.post('/aluno', AlunoController.inserir);
api.put('/aluno/:matricula', AlunoController.alterar);

api.get('/usuario', UsuarioController.listar);
api.get('/usuario/:idusuario', UsuarioController.selecionar);
api.delete('/usuario/:idusuario', UsuarioController.excluir);
api.post('/usuario', UsuarioController.inserir);
api.put('/usuario/:idusuario', UsuarioController.alterar);

api.get('/obra', ObraController.listar);
api.get('/obra/:idobra', ObraController.selecionar);
api.delete('/obra/:idobra', ObraController.excluir);
api.post('/obra', ObraController.inserir);
api.put('/obra/:idobra', ObraController.alterar);

api.get('/emprestimo', EmprestimoController.listar);
api.get('/emprestimo/:idemprestimo', EmprestimoController.selecionar);
//api.delete('/emprestimo/:idemprestimo', EmprestimoController.excluir);
api.post('/emprestimo/devolver/:idemprestimo', EmprestimoController.devolver);
api.post('/emprestimo', EmprestimoController.emprestar);
api.put('/emprestimo/:idemprestimo', EmprestimoController.alterar);


api.get('/exemplar', ExemplarController.listar);
api.get('/exemplar/:idexemplar', ExemplarController.selecionar);
api.delete('/exemplar/:idexemplar', ExemplarController.excluir);
api.post('/exemplar', ExemplarController.inserir);
api.put('/exemplar/:idexemplar', ExemplarController.alterar);

api.listen(3001, ()=> {console.log('Api rodando na porta 3001...')});


