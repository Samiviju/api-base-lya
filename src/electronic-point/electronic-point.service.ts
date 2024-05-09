import { Injectable } from '@nestjs/common';
import { CreateElectronicPointDto } from './dto/create-electronic-point.dto';
import { UpdateElectronicPointDto } from './dto/update-electronic-point.dto';

@Injectable()
export class ElectronicPointService {
  create(createElectronicPointDto: CreateElectronicPointDto) {
    return 'This action adds a new electronicPoint';
  }

  findAll() {
    return `This action returns all electronicPoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} electronicPoint`;
  }

  update(id: number, updateElectronicPointDto: UpdateElectronicPointDto) {
    return `This action updates a #${id} electronicPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} electronicPoint`;
  }
}
