"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userRepository_1 = require("../repositories/userRepository");
class UserController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const userCriado = await userRepository_1.userRepository.create(requisicao);
            await userRepository_1.userRepository.save(userCriado);
            return res.status(201).json(`Usuário criado com sucesso: ${requisicao.name}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        const users = await userRepository_1.userRepository.find({
            relations: ["organization_id"]
        });
        return res.status(200).json(users);
    }
    async findOne(req, res) {
        const id = req.params.id;
        try {
            const user = await userRepository_1.userRepository.findOneBy({ id: Number(id) });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const user = await userRepository_1.userRepository.findOneBy({ id: Number(id) });
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            await userRepository_1.userRepository.update(id, requisicao);
            return res.status(200).json({ message: "Usuário atualizado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const user = await userRepository_1.userRepository.findOneBy({ id: Number(id) });
            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }
            await userRepository_1.userRepository.delete(id);
            return res.status(200).json({ message: "Usuário deletado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
exports.UserController = UserController;
