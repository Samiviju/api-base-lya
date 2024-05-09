import { CreateElectronicPointDto } from './dto/create-electronic-point.dto';
import { UpdateElectronicPointDto } from './dto/update-electronic-point.dto';
export declare class ElectronicPointService {
    create(createElectronicPointDto: CreateElectronicPointDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateElectronicPointDto: UpdateElectronicPointDto): string;
    remove(id: number): string;
}
