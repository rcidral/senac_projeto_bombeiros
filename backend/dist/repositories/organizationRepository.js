"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationRepository = void 0;
const data_source_1 = require("../data-source");
const Organization_1 = require("../entities/Organization");
exports.organizationRepository = data_source_1.AppDataSource.getRepository(Organization_1.Organization);
