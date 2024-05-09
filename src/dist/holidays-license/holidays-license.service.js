"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidaysLicenseService = void 0;
const common_1 = require("@nestjs/common");
let HolidaysLicenseService = class HolidaysLicenseService {
    create(createHolidaysLicenseDto) {
        return 'This action adds a new holidaysLicense';
    }
    findAll() {
        return `This action returns all holidaysLicense`;
    }
    findOne(id) {
        return `This action returns a #${id} holidaysLicense`;
    }
    update(id, updateHolidaysLicenseDto) {
        return `This action updates a #${id} holidaysLicense`;
    }
    remove(id) {
        return `This action removes a #${id} holidaysLicense`;
    }
};
exports.HolidaysLicenseService = HolidaysLicenseService;
exports.HolidaysLicenseService = HolidaysLicenseService = __decorate([
    (0, common_1.Injectable)()
], HolidaysLicenseService);
//# sourceMappingURL=holidays-license.service.js.map