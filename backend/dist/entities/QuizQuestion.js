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
exports.QuizQuestion = void 0;
const typeorm_1 = require("typeorm");
const Quiz_1 = require("./Quiz");
const QuizResponse_1 = require("./QuizResponse");
const ResponseQuestion_1 = require("./ResponseQuestion");
let QuizQuestion = class QuizQuestion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuizQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuizQuestion.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], QuizQuestion.prototype, "has_description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], QuizQuestion.prototype, "has_response", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Quiz_1.Quiz, quiz => quiz.organization_id),
    (0, typeorm_1.JoinColumn)({ name: 'quiz_id' }),
    __metadata("design:type", Quiz_1.Quiz)
], QuizQuestion.prototype, "quiz_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => QuizResponse_1.QuizResponse, quizResponse => quizResponse.quiz_question_id),
    __metadata("design:type", Array)
], QuizQuestion.prototype, "quiz_response_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ResponseQuestion_1.ResponseQuestion, responseQuestion => responseQuestion.quiz_question_id),
    __metadata("design:type", Array)
], QuizQuestion.prototype, "response_question_id", void 0);
QuizQuestion = __decorate([
    (0, typeorm_1.Entity)('quiz_question')
], QuizQuestion);
exports.QuizQuestion = QuizQuestion;
