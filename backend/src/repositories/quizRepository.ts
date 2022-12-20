import { AppDataSource } from "../data-source";
import { Quiz } from "../entities/Quiz";

export const quizRepository = AppDataSource.getRepository(Quiz)