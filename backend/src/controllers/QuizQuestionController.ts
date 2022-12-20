import { Request, Response } from "express";
import { quizQuestionRepository } from "../repositories/quizQuestionRepository";

export class QuizQuestionController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const quizQuestionCriado = await quizQuestionRepository.create(requisicao);
            await quizQuestionRepository.save(quizQuestionCriado);
            return res.status(201).json(`Questão criada com sucesso: ${requisicao.question}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const quizQuestion = await quizQuestionRepository.find({
                relations: ["quiz_id"]
            });
            return res.status(200).json(quizQuestion);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const quizQuestion = await quizQuestionRepository.find({where: {id: Number(id)}, relations: ["quiz_id"]} );
            return res.status(200).json(quizQuestion);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const quizQuestion = await quizQuestionRepository.findOneBy({ id: Number(id) });
            if (!quizQuestion) {
                return res.status(404).json({ message: "Questão não encontrada" });
            }
            await quizQuestionRepository.update(id, requisicao);
            return res.status(200).json({ message: "Questão atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const quizQuestion = await quizQuestionRepository.findOneBy({ id: Number(id) });
            if (!quizQuestion) {
                return res.status(404).json({ message: "Questão não encontrada" });
            }
            await quizQuestionRepository.delete(id);
            return res.status(200).json({ message: "Questão deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}