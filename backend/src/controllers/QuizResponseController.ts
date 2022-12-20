import { Request, Response } from "express";
import { quizResponseRepository } from "../repositories/quizResponseRepository";

export class QuizResponseController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const quizResponseCriado = await quizResponseRepository.create(requisicao);
            await quizResponseRepository.save(quizResponseCriado);
            return res.status(201).json(`Resposta criada com sucesso: ${requisicao.response}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        const quizResponses = await quizResponseRepository.find({
            relations: ["quiz_question_id"]
        });
        return res.status(200).json(quizResponses);
    }
    async findOne(req: Request, res: Response) {
        const { id } = req.params;
        const quizResponse = await quizResponseRepository.find({where: {id: Number(id)}, relations: ["quiz_question_id"]});
    }
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const requisicao = req.body;
        const quizResponse = await quizResponseRepository.findOneBy({ id: Number(id) });
        if (!quizResponse) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await quizResponseRepository.update(id, requisicao);
        return res.status(200).json({ message: "Resposta atualizada com sucesso" });
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const quizResponse = await quizResponseRepository.findOneBy({ id: Number(id) });
        if (!quizResponse) {
            return res.status(404).json({ message: "Resposta não encontrada" });
        }
        await quizResponseRepository.delete(id);
        return res.status(200).json({ message: "Resposta deletada com sucesso" });
    }
}