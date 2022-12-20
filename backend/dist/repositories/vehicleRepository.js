"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleRepository = void 0;
const data_source_1 = require("../data-source");
const Vehicle_1 = require("../entities/Vehicle");
exports.vehicleRepository = data_source_1.AppDataSource.getRepository(Vehicle_1.Vehicle);
