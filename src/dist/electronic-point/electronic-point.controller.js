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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronicPointController = void 0;
const common_1 = require("@nestjs/common");
const electronic_point_service_1 = require("./electronic-point.service");
const create_electronic_point_dto_1 = require("./dto/create-electronic-point.dto");
const update_electronic_point_dto_1 = require("./dto/update-electronic-point.dto");
const swagger_1 = require("@nestjs/swagger");
let ElectronicPointController = class ElectronicPointController {
    constructor(electronicPointService) {
        this.electronicPointService = electronicPointService;
    }
    create(createElectronicPointDto) {
        return this.electronicPointService.create(createElectronicPointDto);
    }
    findAll() {
        return this.electronicPointService.findAll();
    }
    findOne(id) {
        return this.electronicPointService.findOne(+id);
    }
    update(id, updateElectronicPointDto) {
        return this.electronicPointService.update(+id, updateElectronicPointDto);
    }
    remove(id) {
        return this.electronicPointService.remove(+id);
    }
};
exports.ElectronicPointController = ElectronicPointController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_electronic_point_dto_1.CreateElectronicPointDto]),
    __metadata("design:returntype", void 0)
], ElectronicPointController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElectronicPointController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElectronicPointController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_electronic_point_dto_1.UpdateElectronicPointDto]),
    __metadata("design:returntype", void 0)
], ElectronicPointController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElectronicPointController.prototype, "remove", null);
exports.ElectronicPointController = ElectronicPointController = __decorate([
    (0, swagger_1.ApiTags)('ElectronicPoint'),
    (0, common_1.Controller)('electronic-point'),
    __metadata("design:paramtypes", [electronic_point_service_1.ElectronicPointService])
], ElectronicPointController);
//# sourceMappingURL=electronic-point.controller.js.map