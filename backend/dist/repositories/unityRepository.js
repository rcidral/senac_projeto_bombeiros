"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unityRepository = void 0;
const data_source_1 = require("../data-source");
const Unity_1 = require("../entities/Unity");
exports.unityRepository = data_source_1.AppDataSource.getRepository(Unity_1.Unity);
