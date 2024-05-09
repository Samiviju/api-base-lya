import { Test, TestingModule } from '@nestjs/testing';
import { ElectronicPointService } from './electronic-point.service';

describe('ElectronicPointService', () => {
  let service: ElectronicPointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElectronicPointService],
    }).compile();

    service = module.get<ElectronicPointService>(ElectronicPointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
