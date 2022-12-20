import { AppDataSource } from "../data-source";
import { Organization } from "../entities/Organization";

export const organizationRepository = AppDataSource.getRepository(Organization)