import { Module } from '@nestjs/common';
import { ElectronicPointService } from './electronic-point.service';
import { ElectronicPointController } from './electronic-point.controller';

@Module({
  controllers: [ElectronicPointController],
  providers: [ElectronicPointService],
})
export class ElectronicPointModule {}
