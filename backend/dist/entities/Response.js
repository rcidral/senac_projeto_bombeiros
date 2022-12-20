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
exports.Response = void 0;
const typeorm_1 = require("typeorm");
const Quiz_1 = require("./Quiz");
const ResponseQuestion_1 = require("./ResponseQuestion");
const Vehicle_1 = require("./Vehicle");
let Response = class Response {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Response.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vehicle_1.Vehicle, vehicle => vehicle.response_id),
    (0, typeorm_1.JoinColumn)({ name: 'vehicle_id' }),
    __metadata("design:type", Vehicle_1.Vehicle)
], Response.prototype, "vehicle_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Quiz_1.Quiz, quiz => quiz.response_id),
    (0, typeorm_1.JoinColumn)({ name: 'quiz_id' }),
    __metadata("design:type", Quiz_1.Quiz)
], Response.prototype, "quiz_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Response.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ResponseQuestion_1.ResponseQuestion, responseQuestion => responseQuestion.response_id),
    __metadata("design:type", Array)
], Response.prototype, "response_question_id", void 0);
Response = __decorate([
    (0, typeorm_1.Entity)('response')
], Response);
exports.Response = Response;
