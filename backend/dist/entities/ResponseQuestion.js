"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseQuestion = void 0;
const typeorm_1 = require("typeorm");
const QuizQuestion_1 = require("./QuizQuestion");
const QuizResponse_1 = require("./QuizResponse");
const Response_1 = require("./Response");
let ResponseQuestion = class ResponseQuestion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ResponseQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Response_1.Response, response => response.response_question_id),
    (0, typeorm_1.JoinColumn)({ name: 'response_id' }),
    __metadata("design:type", Response_1.Response)
], ResponseQuestion.prototype, "response_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QuizQuestion_1.QuizQuestion, quizQuestion => quizQuestion.response_question_id),
    (0, typeorm_1.JoinColumn)({ name: 'quiz_question_id' }),
    __metadata("design:type", QuizQuestion_1.QuizQuestion)
], ResponseQuestion.prototype, "quiz_question_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QuizResponse_1.QuizResponse, quizResponse => quizResponse.response_question_id),
    (0, typeorm_1.JoinColumn)({ name: 'quiz_response_id' }),
    __metadata("design:type", QuizResponse_1.QuizResponse)
], ResponseQuestion.prototype, "quiz_response_id", void 0);
ResponseQuestion = __decorate([
    (0, typeorm_1.Entity)('response_question')
], ResponseQuestion);
exports.ResponseQuestion = ResponseQuestion;
