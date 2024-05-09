import { Test, TestingModule } from '@nestjs/testing';
import { HolidaysLicenseController } from './holidays-license.controller';
import { HolidaysLicenseService } from './holidays-license.service';

describe('HolidaysLicenseController', () => {
  let controller: HolidaysLicenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HolidaysLicenseController],
      providers: [HolidaysLicenseService],
    }).compile();

    controller = module.get<HolidaysLicenseController>(HolidaysLicenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
