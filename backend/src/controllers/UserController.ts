import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

export class UserController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const userCriado = await userRepository.create(requisicao);
            await userRepository.save(userCriado);
            return res.status(201).json(`Usuário criado com sucesso: ${requisicao.name}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        const users = await userRepository.find({
            relations: ["organization_id"]
        });
        return res.status(200).json(users);
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const user = await userRepository.find({where: {id: Number(id)}, relations: ["organization_id"]});
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const user = await userRepository.findOneBy({ id: Number(id) });
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            await userRepository.update(id, requisicao);
            return res.status(200).json({ message: "Usuário atualizado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const user = await userRepository.findOneBy({ id: Number(id) });
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            await userRepository.delete(id);
            return res.status(200).json({ message: "Usuário deletado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}