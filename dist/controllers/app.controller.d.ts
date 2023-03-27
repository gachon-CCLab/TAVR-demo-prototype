import { patientMRNDto } from 'src/dtos/patientMRN.dto';
import { AppService } from '../services/app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getPatientInform(patientMRNDto: patientMRNDto): Promise<any>;
    getPatientList(): Promise<any>;
    getPPIresult(patientMRNDto: patientMRNDto): Promise<any>;
}
