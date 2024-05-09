import { ElectronicPointService } from './electronic-point.service';
import { CreateElectronicPointDto } from './dto/create-electronic-point.dto';
import { UpdateElectronicPointDto } from './dto/update-electronic-point.dto';
export declare class ElectronicPointController {
    private readonly electronicPointService;
    constructor(electronicPointService: ElectronicPointService);
    create(createElectronicPointDto: CreateElectronicPointDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateElectronicPointDto: UpdateElectronicPointDto): string;
    remove(id: string): string;
}
