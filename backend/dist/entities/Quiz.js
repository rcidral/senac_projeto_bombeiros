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
exports.Quiz = void 0;
const typeorm_1 = require("typeorm");
const Organization_1 = require("./Organization");
const Response_1 = require("./Response");
let Quiz = class Quiz {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Quiz.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Quiz.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Organization_1.Organization, organizaton => organizaton.quiz_id),
    (0, typeorm_1.JoinColumn)({ name: 'organization_id' }),
    __metadata("design:type", Organization_1.Organization)
], Quiz.prototype, "organization_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Response_1.Response, response => response.quiz_id),
    __metadata("design:type", Array)
], Quiz.prototype, "response_id", void 0);
Quiz = __decorate([
    (0, typeorm_1.Entity)('quiz')
], Quiz);
exports.Quiz = Quiz;
