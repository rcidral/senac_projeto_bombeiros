"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleController = void 0;
const vehicleRepository_1 = require("../repositories/vehicleRepository");
class VehicleController {
    async create(req, res) {
        const requisicao = req.body;
        try {
            const vehicleCriado = await vehicleRepository_1.vehicleRepository.create(requisicao);
            await vehicleRepository_1.vehicleRepository.save(vehicleCriado);
            return res.status(201).json(`Veículo criado com sucesso: ${requisicao.name}`);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async findAll(req, res) {
        const vehicles = await vehicleRepository_1.vehicleRepository.find({
            relations: ["unity_id"]
        });
        return res.status(200).json(vehicles);
    }
    async findOne(req, res) {
        const id = req.params.id;
        try {
            const vehicle = await vehicleRepository_1.vehicleRepository.findOneBy({ id: Number(id) });
            return res.status(200).json(vehicle);
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async update(req, res) {
        const id = req.params.id;
        const requisicao = req.body;
        try {
            const vehicle = await vehicleRepository_1.vehicleRepository.findOneBy({ id: Number(id) });
            if (!vehicle) {
                return res.status(404).json({ message: "Veículo não encontrado" });
            }
            await vehicleRepository_1.vehicleRepository.update(id, requisicao);
            return res.status(200).json({ message: "Veículo atualizado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
    async delete(req, res) {
        const id = req.params.id;
        try {
            const vehicle = await vehicleRepository_1.vehicleRepository.findOneBy({ id: Number(id) });
            if (!vehicle) {
                return res.status(404).json({ message: "Veículo não encontrado" });
            }
            await vehicleRepository_1.vehicleRepository.delete(id);
            return res.status(200).json({ message: "Veículo deletado com sucesso" });
        }
        catch (error) {
            return res.status(500).json({ message: "Erro interno" });
        }
    }
}
exports.VehicleController = VehicleController;
