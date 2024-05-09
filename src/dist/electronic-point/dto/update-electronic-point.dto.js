"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateElectronicPointDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_electronic_point_dto_1 = require("./create-electronic-point.dto");
class UpdateElectronicPointDto extends (0, mapped_types_1.PartialType)(create_electronic_point_dto_1.CreateElectronicPointDto) {
}
exports.UpdateElectronicPointDto = UpdateElectronicPointDto;
//# sourceMappingURL=update-electronic-point.dto.js.map