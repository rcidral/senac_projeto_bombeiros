import { AppDataSource } from "../data-source";
import { QuizResponse } from "../entities/QuizResponse";

export const quizResponseRepository = AppDataSource.getRepository(QuizResponse)