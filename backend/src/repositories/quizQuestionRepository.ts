import { AppDataSource } from "../data-source";
import { QuizQuestion } from "../entities/QuizQuestion";

export const quizQuestionRepository = AppDataSource.getRepository(QuizQuestion)