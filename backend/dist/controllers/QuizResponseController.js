"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizResponseController = void 0;
const quizResponseRepository_1 = require("../repositories/quizResponseRepository");
class QuizResponseController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const quizResponseCriado = await quizResponseRepository_1.quizResponseRepository.create(requisicao);
            await quizResponseRepository_1.quizResponseRepository.save(quizResponseCriado);
            return res.status(201).json(`Resposta criada com sucesso: ${requisicao.response}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        const quizResponses = await quizResponseRepository_1.quizResponseRepository.find({
            relations: ["quiz_question_id"]
        });
        return res.status(200).json(quizResponses);
    }
    async findOne(req, res) {
        const { id } = req.params;
        const quizResponse = await quizResponseRepository_1.quizResponseRepository.find({ where: { id: Number(id) }, relations: ["quiz_question_id"] });
    }
    async update(req, res) {
        const { id } = req.params;
        const requisicao = req.body;
        const quizResponse = await quizResponseRepository_1.quizResponseRepository.findOneBy({ id: Number(id) });
        if (!quizResponse) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await quizResponseRepository_1.quizResponseRepository.update(id, requisicao);
        return res.status(200).json({ message: "Resposta atualizada com sucesso" });
    }
    async delete(req, res) {
        const { id } = req.params;
        const quizResponse = await quizResponseRepository_1.quizResponseRepository.findOneBy({ id: Number(id) });
        if (!quizResponse) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await quizResponseRepository_1.quizResponseRepository.delete(id);
        return res.status(200).json({ message: "Resposta deletada com sucesso" });
    }
}
exports.QuizResponseController = QuizResponseController;
