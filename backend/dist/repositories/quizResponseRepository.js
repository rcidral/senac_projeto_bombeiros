"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizResponseRepository = void 0;
const data_source_1 = require("../data-source");
const QuizResponse_1 = require("../entities/QuizResponse");
exports.quizResponseRepository = data_source_1.AppDataSource.getRepository(QuizResponse_1.QuizResponse);
