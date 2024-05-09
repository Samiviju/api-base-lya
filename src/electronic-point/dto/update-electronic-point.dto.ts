import { PartialType } from '@nestjs/mapped-types';
import { CreateElectronicPointDto } from './create-electronic-point.dto';

export class UpdateElectronicPointDto extends PartialType(CreateElectronicPointDto) {}
