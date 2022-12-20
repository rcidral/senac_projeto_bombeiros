"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizController = void 0;
const quizRepository_1 = require("../repositories/quizRepository");
class QuizController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const quizCriado = await quizRepository_1.quizRepository.create(requisicao);
            await quizRepository_1.quizRepository.save(quizCriado);
            return res.status(201).json(`Quiz criado com sucesso: ${requisicao.nome}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        try {
            const quizzes = await quizRepository_1.quizRepository.find({
                relations: ["organization_id"]
            });
            return res.status(200).json(quizzes);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req, res) {
        const id = req.params.id;
        try {
            const quiz = await quizRepository_1.quizRepository.find({ where: { id: Number(id) }, relations: ["organization_id"] });
            return res.status(200).json(quiz);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const quiz = await quizRepository_1.quizRepository.findOneBy({ id: Number(id) });
            if (!quiz) {
                return res.status(404).json({ message: "Quiz não encontrado" });
            }
            await quizRepository_1.quizRepository.update(id, requisicao);
            return res.status(200).json({ message: "Quiz atualizado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const quiz = await quizRepository_1.quizRepository.findOneBy({ id: Number(id) });
            if (!quiz) {
                return res.status(404).json({ message: "Quiz não encontrado" });
            }
            await quizRepository_1.quizRepository.delete(id);
            return res.status(200).json({ message: "Quiz deletado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
exports.QuizController = QuizController;
