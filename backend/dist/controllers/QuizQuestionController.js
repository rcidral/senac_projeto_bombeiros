"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizQuestionController = void 0;
const quizQuestionRepository_1 = require("../repositories/quizQuestionRepository");
class QuizQuestionController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const quizQuestionCriado = await quizQuestionRepository_1.quizQuestionRepository.create(requisicao);
            await quizQuestionRepository_1.quizQuestionRepository.save(quizQuestionCriado);
            return res.status(201).json(`Questão criada com sucesso: ${requisicao.question}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        try {
            const quizQuestion = await quizQuestionRepository_1.quizQuestionRepository.find({
                relations: ["quiz_id"]
            });
            return res.status(200).json(quizQuestion);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req, res) {
        const id = req.params.id;
        try {
            const quizQuestion = await quizQuestionRepository_1.quizQuestionRepository.find({ where: { id: Number(id) }, relations: ["quiz_id"] });
            return res.status(200).json(quizQuestion);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const quizQuestion = await quizQuestionRepository_1.quizQuestionRepository.findOneBy({ id: Number(id) });
            if (!quizQuestion) {
                return res.status(404).json({ message: "Questão não encontrada" });
            }
            await quizQuestionRepository_1.quizQuestionRepository.update(id, requisicao);
            return res.status(200).json({ message: "Questão atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const quizQuestion = await quizQuestionRepository_1.quizQuestionRepository.findOneBy({ id: Number(id) });
            if (!quizQuestion) {
                return res.status(404).json({ message: "Questão não encontrada" });
            }
            await quizQuestionRepository_1.quizQuestionRepository.delete(id);
            return res.status(200).json({ message: "Questão deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
exports.QuizQuestionController = QuizQuestionController;
