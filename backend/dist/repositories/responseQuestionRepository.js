"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseQuestionRepository = void 0;
const data_source_1 = require("../data-source");
const ResponseQuestion_1 = require("../entities/ResponseQuestion");
exports.responseQuestionRepository = data_source_1.AppDataSource.getRepository(ResponseQuestion_1.ResponseQuestion);
