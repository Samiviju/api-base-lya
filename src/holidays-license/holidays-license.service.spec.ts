import { Test, TestingModule } from '@nestjs/testing';
import { HolidaysLicenseService } from './holidays-license.service';

describe('HolidaysLicenseService', () => {
  let service: HolidaysLicenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HolidaysLicenseService],
    }).compile();

    service = module.get<HolidaysLicenseService>(HolidaysLicenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
