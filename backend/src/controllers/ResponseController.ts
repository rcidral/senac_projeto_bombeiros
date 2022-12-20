import { Request, Response } from "express";
import { responseRepository } from "../repositories/responseRepository";

export class ResponseController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const responseCriado = await responseRepository.create(requisicao);
            await responseRepository.save(responseCriado);
            return res.status(201).json(`Resposta criada com sucesso: ${requisicao.response}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        const responses = await responseRepository.find({
            relations: ["vehicle_id", "quiz_id"]
        });
        return res.status(200).json(responses);
    }
    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const response = await responseRepository.find({where: {id: Number(id)}, relations: ["vehicle_id", "quiz_id"]});
    }
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const requisicao = req.body;
        const response = await responseRepository.findOneBy({ id: Number(id) });
        if (!response) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await responseRepository.update(id, requisicao);
        return res.status(200).json({ message: "Resposta atualizada com sucesso" });
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const response = await responseRepository.findOneBy({ id: Number(id) });
        if (!response) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await responseRepository.delete(id);
        return res.status(200).json({ message: "Resposta deletada com sucesso" });
    }
}