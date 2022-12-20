import { AppDataSource } from "../data-source";
import { Vehicle } from "../entities/Vehicle";

export const vehicleRepository = AppDataSource.getRepository(Vehicle)