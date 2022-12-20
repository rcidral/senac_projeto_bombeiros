import { Request, Response } from "express";
import { organizationRepository } from "../repositories/organizationRepository";
import { quizRepository } from "../repositories/quizRepository";

export class QuizController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const quizCriado = await quizRepository.create(requisicao);
            await quizRepository.save(quizCriado);
            return res.status(201).json(`Quiz criado com sucesso: ${requisicao.nome}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const quizzes = await quizRepository.find({
                relations: ["organization_id"]
            });
            return res.status(200).json(quizzes);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const quiz = await quizRepository.find({ where: { id: Number(id) }, relations: ["organization_id"] });
            return res.status(200).json(quiz);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const quiz = await quizRepository.findOneBy({ id: Number(id) });
            if (!quiz) {
                return res.status(404).json({ message: "Quiz não encontrado" });
            }
            await quizRepository.update(id, requisicao);
            return res.status(200).json({ message: "Quiz atualizado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const quiz = await quizRepository.findOneBy({ id: Number(id) });
            if (!quiz) {
                return res.status(404).json({ message: "Quiz não encontrado" });
            }
            await quizRepository.delete(id);
            return res.status(200).json({ message: "Quiz deletado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}