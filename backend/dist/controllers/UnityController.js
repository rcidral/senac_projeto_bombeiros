"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnityController = void 0;
const unityRepository_1 = require("../repositories/unityRepository");
class UnityController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const unityCriado = await unityRepository_1.unityRepository.create(requisicao);
            await unityRepository_1.unityRepository.save(unityCriado);
            return res.status(201).json(`Unidade criada com sucesso: ${requisicao.nome}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        try {
            const unities = await unityRepository_1.unityRepository.find({
                relations: ["organization_id"]
            });
            return res.status(200).json(unities);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req, res) {
        const id = req.params.id;
        try {
            const unity = await unityRepository_1.unityRepository.find({ where: { id: Number(id) }, relations: ["organization_id"] });
            return res.status(200).json(unity);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const unity = await unityRepository_1.unityRepository.findOneBy({ id: Number(id) });
            if (!unity) {
                return res.status(404).json({ message: "Unidade não encontrada" });
            }
            await unityRepository_1.unityRepository.update(id, requisicao);
            return res.status(200).json({ message: "Unidade atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const unity = await unityRepository_1.unityRepository.findOneBy({ id: Number(id) });
            if (!unity) {
                return res.status(404).json({ message: "Unidade não encontrada" });
            }
            await unityRepository_1.unityRepository.delete(id);
            return res.status(200).json({ message: "Unidade deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
exports.UnityController = UnityController;
