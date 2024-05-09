import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElectronicPointService } from './electronic-point.service';
import { CreateElectronicPointDto } from './dto/create-electronic-point.dto';
import { UpdateElectronicPointDto } from './dto/update-electronic-point.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ElectronicPoint')
@Controller('electronic-point')
export class ElectronicPointController {
  constructor(private readonly electronicPointService: ElectronicPointService) {}

  @Post()
  create(@Body() createElectronicPointDto: CreateElectronicPointDto) {
    return this.electronicPointService.create(createElectronicPointDto);
  }

  @Get()
  findAll() {
    return this.electronicPointService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.electronicPointService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateElectronicPointDto: UpdateElectronicPointDto) {
    return this.electronicPointService.update(+id, updateElectronicPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.electronicPointService.remove(+id);
  }
}
