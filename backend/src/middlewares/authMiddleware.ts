import { NextFunction, Request, Response } from 'express'
import { UnauthorizedError } from '../helpers/api-errors'
import { userRepository } from '../repositories/userRepository'
import jwt from 'jsonwebtoken'
import { User } from '../entities/User'

type JwtPayload = {
	id: number
}
type UserInfo = Omit<User, 'password'>
type RequestWithUser = Request & { context: { user: UserInfo } };

export const authMiddleware = async (
	req: RequestWithUser,
	res: Response,
	next: NextFunction
) => {
	const { authorization } = req.headers

	if (!authorization) {
		throw new UnauthorizedError('Não autorizado')
	}

	const token = authorization.split(' ')[1]

	const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

	const user = await userRepository.findOneBy({ id })

	if (!user) {
		throw new UnauthorizedError('Não autorizado')
	}

	const {...loggedUser } = user

	req.context.user = loggedUser

	next()
}