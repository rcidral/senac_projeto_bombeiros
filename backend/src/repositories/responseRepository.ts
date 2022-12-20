import { AppDataSource } from "../data-source";
import { Response } from "../entities/Response";

export const responseRepository = AppDataSource.getRepository(Response)