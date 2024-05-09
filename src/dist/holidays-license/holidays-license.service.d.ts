import { CreateHolidaysLicenseDto } from './dto/create-holidays-license.dto';
import { UpdateHolidaysLicenseDto } from './dto/update-holidays-license.dto';
export declare class HolidaysLicenseService {
    create(createHolidaysLicenseDto: CreateHolidaysLicenseDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHolidaysLicenseDto: UpdateHolidaysLicenseDto): string;
    remove(id: number): string;
}
