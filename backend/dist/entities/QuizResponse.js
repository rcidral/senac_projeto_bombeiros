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
exports.QuizResponse = void 0;
const typeorm_1 = require("typeorm");
const QuizQuestion_1 = require("./QuizQuestion");
const ResponseQuestion_1 = require("./ResponseQuestion");
let QuizResponse = class QuizResponse {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuizResponse.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], QuizResponse.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QuizQuestion_1.QuizQuestion, quizQuestion => quizQuestion.quiz_response_id),
    (0, typeorm_1.JoinColumn)({ name: 'quiz_question_id' }),
    __metadata("design:type", QuizQuestion_1.QuizQuestion)
], QuizResponse.prototype, "quiz_question_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ResponseQuestion_1.ResponseQuestion, responseQuestion => responseQuestion.quiz_response_id),
    __metadata("design:type", Array)
], QuizResponse.prototype, "response_question_id", void 0);
QuizResponse = __decorate([
    (0, typeorm_1.Entity)('quiz_response')
], QuizResponse);
exports.QuizResponse = QuizResponse;
