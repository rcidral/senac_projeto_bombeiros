import { Request, Response } from "express";
import { organizationRepository } from "../repositories/organizationRepository";

export class OrganizationController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const organizationCriado = await organizationRepository.create(requisicao);
            await organizationRepository.save(organizationCriado);
            return res.status(201).json(`Organização criada com sucesso: ${requisicao.nome}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const organizations = await organizationRepository.find();
            return res.status(200).json(organizations);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const organization = await organizationRepository.findOneBy({ id: Number(id) });
            return res.status(200).json(organization);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const organization = await organizationRepository.findOneBy({ id: Number(id) });
            if (!organization) {
                return res.status(404).json({ message: "Organização não encontrada" });
            }
            await organizationRepository.update(id, requisicao);
            return res.status(200).json({ message: "Organização atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const organization = await organizationRepository.findOneBy({ id: Number(id) });
            if (!organization) {
                return res.status(404).json({ message: "Organização não encontrada" });
            }
            await organizationRepository.delete(id);
            return res.status(200).json({ message: "Organização deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}