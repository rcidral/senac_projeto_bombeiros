import { Request, Response } from "express";
import { responseQuestionRepository } from "../repositories/responseQuestionRepository";

export class ResponseQuestionController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const responseQuestionCriado = await responseQuestionRepository.create(requisicao);
            await responseQuestionRepository.save(responseQuestionCriado);
            return res.status(201).json(`ResponseQuestion criada com sucesso: ${requisicao.name}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        const responseQuestions = await responseQuestionRepository.find({
            relations: ["response_id","quiz_question_id", "quiz_response_id"]
        });
        return res.status(200).json(responseQuestions);
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const responseQuestion = await responseQuestionRepository.find({where: {id: Number(id)}, relations: ["response_id","quiz_question_id", "quiz_response_id"]});
            return res.status(200).json(responseQuestion);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const responseQuestion = await responseQuestionRepository.findOneBy({ id: Number(id) });
            if (!responseQuestion) {
                return res.status(404).json({ message: "ResponseQuestion não encontrada" });
            }
            await responseQuestionRepository.update(id, requisicao);
            return res.status(200).json({ message: "ResponseQuestion atualizada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const responseQuestion = await responseQuestionRepository.findOneBy({ id: Number(id) });
            if (!responseQuestion) {
                return res.status(404).json({ message: "ResponseQuestion não encontrada" });
            }
            await responseQuestionRepository.delete(id);
            return res.status(200).json({ message: "ResponseQuestion deletada com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    
}