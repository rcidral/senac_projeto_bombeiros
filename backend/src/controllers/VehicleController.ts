import { Request, Response } from "express";
import { vehicleRepository } from "../repositories/vehicleRepository";

export class VehicleController {
    async create(req: Request, res: Response) {
        const requisicao = req.body;
        try {
            const vehicleCriado = await vehicleRepository.create(requisicao);
            await vehicleRepository.save(vehicleCriado);
            return res.status(201).json(`Veículo criado com sucesso: ${requisicao.name}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req: Request, res: Response) {
        const vehicles = await vehicleRepository.find({
            relations: ["unity_id"]
        });
        return res.status(200).json(vehicles);
    }
    async findOne(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const vehicle = await vehicleRepository.findOneBy({ id: Number(id) });
            return res.status(200).json(vehicle);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req: Request, res: Response) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const vehicle = await vehicleRepository.find({where: {id: Number(id)}, relations: ["unity_id"]});
            if (!vehicle) {
                return res.status(404).json({ message: "Veículo não encontrado" });
            }
            await vehicleRepository.update(id, requisicao);
            return res.status(200).json({ message: "Veículo atualizado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const vehicle = await vehicleRepository.findOneBy({ id: Number(id) });
            if (!vehicle) {
                return res.status(404).json({ message: "Veículo não encontrado" });
            }
            await vehicleRepository.delete(id);
            return res.status(200).json({ message: "Veículo deletado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}