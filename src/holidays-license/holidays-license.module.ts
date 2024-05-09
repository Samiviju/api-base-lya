import { Module } from '@nestjs/common';
import { HolidaysLicenseService } from './holidays-license.service';
import { HolidaysLicenseController } from './holidays-license.controller';

@Module({
  controllers: [HolidaysLicenseController],
  providers: [HolidaysLicenseService],
})
export class HolidaysLicenseModule {}
