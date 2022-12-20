"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseRepository = void 0;
const data_source_1 = require("../data-source");
const Response_1 = require("../entities/Response");
exports.responseRepository = data_source_1.AppDataSource.getRepository(Response_1.Response);
