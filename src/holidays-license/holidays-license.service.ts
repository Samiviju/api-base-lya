import { Injectable } from '@nestjs/common';
import { CreateHolidaysLicenseDto } from './dto/create-holidays-license.dto';
import { UpdateHolidaysLicenseDto } from './dto/update-holidays-license.dto';

@Injectable()
export class HolidaysLicenseService {
  create(createHolidaysLicenseDto: CreateHolidaysLicenseDto) {
    return 'This action adds a new holidaysLicense';
  }

  findAll() {
    return `This action returns all holidaysLicense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} holidaysLicense`;
  }

  update(id: number, updateHolidaysLicenseDto: UpdateHolidaysLicenseDto) {
    return `This action updates a #${id} holidaysLicense`;
  }

  remove(id: number) {
    return `This action removes a #${id} holidaysLicense`;
  }
}
