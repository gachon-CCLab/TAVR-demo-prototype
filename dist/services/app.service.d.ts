import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getHello(): string;
    getPatientList(): Promise<any>;
    getPatientInform(patientMRNDto: any): Promise<any>;
    getPPIResult(): Promise<any>;
}
