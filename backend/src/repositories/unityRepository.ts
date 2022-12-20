import { AppDataSource } from "../data-source";
import { Unity } from "../entities/Unity";

export const unityRepository = AppDataSource.getRepository(Unity)