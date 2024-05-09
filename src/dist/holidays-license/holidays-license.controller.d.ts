import { HolidaysLicenseService } from './holidays-license.service';
import { CreateHolidaysLicenseDto } from './dto/create-holidays-license.dto';
import { UpdateHolidaysLicenseDto } from './dto/update-holidays-license.dto';
export declare class HolidaysLicenseController {
    private readonly holidaysLicenseService;
    constructor(holidaysLicenseService: HolidaysLicenseService);
    create(createHolidaysLicenseDto: CreateHolidaysLicenseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHolidaysLicenseDto: UpdateHolidaysLicenseDto): string;
    remove(id: string): string;
}
