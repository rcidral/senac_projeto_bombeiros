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
exports.Unity = void 0;
const typeorm_1 = require("typeorm");
const Organization_1 = require("./Organization");
const Vehicle_1 = require("./Vehicle");
let Unity = class Unity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Unity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Unity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Organization_1.Organization, organizaton => organizaton.unity_id),
    (0, typeorm_1.JoinColumn)({ name: 'organization_id' }),
    __metadata("design:type", Organization_1.Organization)
], Unity.prototype, "organization_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Vehicle_1.Vehicle, vehicle => vehicle.unity_id),
    __metadata("design:type", Array)
], Unity.prototype, "vehicle_id", void 0);
Unity = __decorate([
    (0, typeorm_1.Entity)('unity')
], Unity);
exports.Unity = Unity;
