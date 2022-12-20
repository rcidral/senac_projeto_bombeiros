"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizQuestionRepository = void 0;
const data_source_1 = require("../data-source");
const QuizQuestion_1 = require("../entities/QuizQuestion");
exports.quizQuestionRepository = data_source_1.AppDataSource.getRepository(QuizQuestion_1.QuizQuestion);
