import { Request, Response } from "express";
import { unityRepository } from "../repositories/unityRepository";

export class UnityController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const unityCriado = await unityRepository.create(requisicao);
            await unityRepository.save(unityCriado);
            return res.status(201).json(`Unidade criada com sucesso: ${requisicao.nome}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const unities = await unityRepository.find({
                relations: ["organization_id"]
            });
            return res.status(200).json(unities);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const unity = await unityRepository.find({where: {id: Number(id)}, relations: ["organization_id"]});
            return res.status(200).json(unity);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const unity = await unityRepository.findOneBy({ id: Number(id) });
            if (!unity) {
                return res.status(404).json({ message: "Unidade não encontrada" });
            }
            await unityRepository.update(id, requisicao);
            return res.status(200).json({ message: "Unidade atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const unity = await unityRepository.findOneBy({ id: Number(id) });
            if (!unity) {
                return res.status(404).json({ message: "Unidade não encontrada" });
            }
            await unityRepository.delete(id);
            return res.status(200).json({ message: "Unidade deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
    