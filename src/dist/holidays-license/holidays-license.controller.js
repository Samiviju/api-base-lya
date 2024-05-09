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
exports.HolidaysLicenseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const holidays_license_service_1 = require("./holidays-license.service");
const create_holidays_license_dto_1 = require("./dto/create-holidays-license.dto");
const update_holidays_license_dto_1 = require("./dto/update-holidays-license.dto");
let HolidaysLicenseController = class HolidaysLicenseController {
    constructor(holidaysLicenseService) {
        this.holidaysLicenseService = holidaysLicenseService;
    }
    create(createHolidaysLicenseDto) {
        return this.holidaysLicenseService.create(createHolidaysLicenseDto);
    }
    findAll() {
        return this.holidaysLicenseService.findAll();
    }
    findOne(id) {
        return this.holidaysLicenseService.findOne(+id);
    }
    update(id, updateHolidaysLicenseDto) {
        return this.holidaysLicenseService.update(+id, updateHolidaysLicenseDto);
    }
    remove(id) {
        return this.holidaysLicenseService.remove(+id);
    }
};
exports.HolidaysLicenseController = HolidaysLicenseController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_holidays_license_dto_1.CreateHolidaysLicenseDto]),
    __metadata("design:returntype", void 0)
], HolidaysLicenseController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HolidaysLicenseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HolidaysLicenseController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_holidays_license_dto_1.UpdateHolidaysLicenseDto]),
    __metadata("design:returntype", void 0)
], HolidaysLicenseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HolidaysLicenseController.prototype, "remove", null);
exports.HolidaysLicenseController = HolidaysLicenseController = __decorate([
    (0, swagger_1.ApiTags)('HolidaysLicense'),
    (0, common_1.Controller)('holidays-license'),
    __metadata("design:paramtypes", [holidays_license_service_1.HolidaysLicenseService])
], HolidaysLicenseController);
//# sourceMappingURL=holidays-license.controller.js.map