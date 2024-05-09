import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ElectronicPointModule } from './electronic-point/electronic-point.module';
import { DepartmentsModule } from './departments/departments.module';
import { EmployeesModule } from './employees/employees.module';
import { ReportModule } from './report/report.module';
import { HolidaysLicenseModule } from './holidays-license/holidays-license.module';

@Module({
  imports: [PrismaModule, UserModule, ElectronicPointModule, DepartmentsModule, EmployeesModule, ReportModule, HolidaysLicenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
