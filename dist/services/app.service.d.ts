export declare class AppService {
    getHello(): string;
    getPatientList(): Promise<any>;
    getPatientInform(patientMRNDto: any): Promise<any>;
    getPPIResult(): Promise<any>;
}
