"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseQuestionController = void 0;
const responseQuestionRepository_1 = require("../repositories/responseQuestionRepository");
class ResponseQuestionController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const responseQuestionCriado = await responseQuestionRepository_1.responseQuestionRepository.create(requisicao);
            await responseQuestionRepository_1.responseQuestionRepository.save(responseQuestionCriado);
            return res.status(201).json(`ResponseQuestion criada com sucesso: ${requisicao.name}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        const responseQuestions = await responseQuestionRepository_1.responseQuestionRepository.find({
            relations: ["response_id", "quiz_question_id", "quiz_response_id"]
        });
        return res.status(200).json(responseQuestions);
    }
    async findOne(req, res) {
        const id = req.params.id;
        try {
            const responseQuestion = await responseQuestionRepository_1.responseQuestionRepository.find({ where: { id: Number(id) }, relations: ["response_id", "quiz_question_id", "quiz_response_id"] });
            return res.status(200).json(responseQuestion);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const responseQuestion = await responseQuestionRepository_1.responseQuestionRepository.findOneBy({ id: Number(id) });
            if (!responseQuestion) {
                return res.status(404).json({ message: "ResponseQuestion não encontrada" });
            }
            await responseQuestionRepository_1.responseQuestionRepository.update(id, requisicao);
            return res.status(200).json({ message: "ResponseQuestion atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const responseQuestion = await responseQuestionRepository_1.responseQuestionRepository.findOneBy({ id: Number(id) });
            if (!responseQuestion) {
                return res.status(404).json({ message: "ResponseQuestion não encontrada" });
            }
            await responseQuestionRepository_1.responseQuestionRepository.delete(id);
            return res.status(200).json({ message: "ResponseQuestion deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
exports.ResponseQuestionController = ResponseQuestionController;
