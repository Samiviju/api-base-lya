import { PartialType } from '@nestjs/mapped-types';
import { CreateHolidaysLicenseDto } from './create-holidays-license.dto';

export class UpdateHolidaysLicenseDto extends PartialType(CreateHolidaysLicenseDto) {}
