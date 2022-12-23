"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userRepository_1 = require("../repositories/userRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const api_errors_1 = require("../helpers/api-errors");
class UserController {
    async create(req, res) {
        const { name, email, password, abvesc, registration, general_registration, birthday, blood_type, organization_id } = req.body;
        try {
            const hashPassword = await bcrypt_1.default.hash(password, 10);
            const userCriado = await userRepository_1.userRepository.create({
                name,
                email,
                password: hashPassword,
                abvesc,
                registration,
                general_registration,
                birthday,
                blood_type,
                organization_id
            });
            await userRepository_1.userRepository.save(userCriado);
            return res.status(201).json(`Usuário criado com sucesso: ${name}`);
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
            const user = await userRepository_1.userRepository.find({ where: { id: Number(id) }, relations: ["organization_id"] });
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
    async login(req, res) {
        var _a;
        const { email, password } = req.body;
        const user = await userRepository_1.userRepository.findOneBy({ email });
        if (!user) {
            throw new api_errors_1.BadRequestError('E-mail ou senha inválidos');
        }
        const verifyPass = await bcrypt_1.default.compare(password, user.password);
        if (!verifyPass) {
            throw new api_errors_1.BadRequestError('E-mail ou senha inválidos');
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : '', {
            expiresIn: '8h',
        });
        const { password: _, ...userLogin } = user;
        return res.json({
            user: userLogin,
            token: token,
        });
    }
    async getProfile(req, res) {
        return res.json(req.context.user);
    }
}
exports.UserController = UserController;
