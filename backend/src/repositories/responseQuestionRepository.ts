import { AppDataSource } from "../data-source";
import { ResponseQuestion } from "../entities/ResponseQuestion";

export const responseQuestionRepository = AppDataSource.getRepository(ResponseQuestion)