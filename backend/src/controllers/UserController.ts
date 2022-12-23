import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { BadRequestError } from "../helpers/api-errors";
import { User } from "../entities/User";

type RequestWithUser = Request & { context: { user: User } };

export class UserController {
    async create(req: Request, res: Response) {
        const {name, email, password, abvesc, registration, general_registration, birthday, blood_type, organization_id} = req.body;
        try {
            const hashPassword = await bcrypt.hash(password, 10);
            const userCriado = await userRepository.create({
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
            await userRepository.save(userCriado);
            return res.status(201).json(`Usuário criado com sucesso: ${name}`);
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
    async login(req: Request, res: Response) {
		const { email, password } = req.body

		const user = await userRepository.findOneBy({ email })

		if (!user) {
			throw new BadRequestError('E-mail ou senha inválidos')
		}

		const verifyPass = await bcrypt.compare(password, user.password) 

		if (!verifyPass) {
			throw new BadRequestError('E-mail ou senha inválidos')
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
			expiresIn: '8h',
		})

		const { password: _, ...userLogin } = user

		return res.json({
			user: userLogin,
			token: token,
		})
	}
    async getProfile(req: RequestWithUser, res: Response) {
        return res.json(req.context.user);
    }
}