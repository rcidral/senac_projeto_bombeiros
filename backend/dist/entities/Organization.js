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
exports.Organization = void 0;
const typeorm_1 = require("typeorm");
const Unity_1 = require("./Unity");
const Quiz_1 = require("./Quiz");
const User_1 = require("./User");
let Organization = class Organization {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Organization.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Organization.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Unity_1.Unity, unity => unity.organization_id),
    __metadata("design:type", Array)
], Organization.prototype, "unity_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Quiz_1.Quiz, quiz => quiz.organization_id),
    __metadata("design:type", Array)
], Organization.prototype, "quiz_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.User, user => user.organization_id),
    __metadata("design:type", Array)
], Organization.prototype, "user_id", void 0);
Organization = __decorate([
    (0, typeorm_1.Entity)('organization')
], Organization);
exports.Organization = Organization;
