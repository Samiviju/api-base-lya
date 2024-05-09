import { Test, TestingModule } from '@nestjs/testing';
import { ElectronicPointController } from './electronic-point.controller';
import { ElectronicPointService } from './electronic-point.service';

describe('ElectronicPointController', () => {
  let controller: ElectronicPointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElectronicPointController],
      providers: [ElectronicPointService],
    }).compile();

    controller = module.get<ElectronicPointController>(ElectronicPointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
