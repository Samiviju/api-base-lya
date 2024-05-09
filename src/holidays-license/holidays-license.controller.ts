import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HolidaysLicenseService } from './holidays-license.service';
import { CreateHolidaysLicenseDto } from './dto/create-holidays-license.dto';
import { UpdateHolidaysLicenseDto } from './dto/update-holidays-license.dto';

@ApiTags('HolidaysLicense')
@Controller('holidays-license')
export class HolidaysLicenseController {
  constructor(private readonly holidaysLicenseService: HolidaysLicenseService) {}

  @Post()
  create(@Body() createHolidaysLicenseDto: CreateHolidaysLicenseDto) {
    return this.holidaysLicenseService.create(createHolidaysLicenseDto);
  }

  @Get()
  findAll() {
    return this.holidaysLicenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.holidaysLicenseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHolidaysLicenseDto: UpdateHolidaysLicenseDto) {
    return this.holidaysLicenseService.update(+id, updateHolidaysLicenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.holidaysLicenseService.remove(+id);
  }
}
