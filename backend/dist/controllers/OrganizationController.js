"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationController = void 0;
const organizationRepository_1 = require("../repositories/organizationRepository");
class OrganizationController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const organizationCriado = await organizationRepository_1.organizationRepository.create(requisicao);
            await organizationRepository_1.organizationRepository.save(organizationCriado);
            return res.status(201).json(`Organização criada com sucesso: ${requisicao.nome}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        try {
            const organizations = await organizationRepository_1.organizationRepository.find();
            return res.status(200).json(organizations);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req, res) {
        const id = req.params.id;
        try {
            const organization = await organizationRepository_1.organizationRepository.findOneBy({ id: Number(id) });
            return res.status(200).json(organization);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const organization = await organizationRepository_1.organizationRepository.findOneBy({ id: Number(id) });
            if (!organization) {
                return res.status(404).json({ message: "Organização não encontrada" });
            }
            await organizationRepository_1.organizationRepository.update(id, requisicao);
            return res.status(200).json({ message: "Organização atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const organization = await organizationRepository_1.organizationRepository.findOneBy({ id: Number(id) });
            if (!organization) {
                return res.status(404).json({ message: "Organização não encontrada" });
            }
            await organizationRepository_1.organizationRepository.delete(id);
            return res.status(200).json({ message: "Organização deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
exports.OrganizationController = OrganizationController;
