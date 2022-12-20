"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizRepository = void 0;
const data_source_1 = require("../data-source");
const Quiz_1 = require("../entities/Quiz");
exports.quizRepository = data_source_1.AppDataSource.getRepository(Quiz_1.Quiz);
