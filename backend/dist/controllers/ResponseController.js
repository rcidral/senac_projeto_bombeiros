"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseController = void 0;
const responseRepository_1 = require("../repositories/responseRepository");
class ResponseController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const responseCriado = await responseRepository_1.responseRepository.create(requisicao);
            await responseRepository_1.responseRepository.save(responseCriado);
            return res.status(201).json(`Resposta criada com sucesso: ${requisicao.response}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        const responses = await responseRepository_1.responseRepository.find({
            relations: ["vehicle_id", "quiz_id"]
        });
        return res.status(200).json(responses);
    }
    async findOne(req, res) {
        const { id } = req.params;
        const response = await responseRepository_1.responseRepository.find({ where: { id: Number(id) }, relations: ["vehicle_id", "quiz_id"] });
    }
    async update(req, res) {
        const { id } = req.params;
        const requisicao = req.body;
        const response = await responseRepository_1.responseRepository.findOneBy({ id: Number(id) });
        if (!response) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await responseRepository_1.responseRepository.update(id, requisicao);
        return res.status(200).json({ message: "Resposta atualizada com sucesso" });
    }
    async delete(req, res) {
        const { id } = req.params;
        const response = await responseRepository_1.responseRepository.findOneBy({ id: Number(id) });
        if (!response) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await responseRepository_1.responseRepository.delete(id);
        return res.status(200).json({ message: "Resposta deletada com sucesso" });
    }
}
exports.ResponseController = ResponseController;
