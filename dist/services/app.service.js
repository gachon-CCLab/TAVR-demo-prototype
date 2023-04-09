"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const database_lib_1 = require("../libraries/database.lib");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHello() {
        return 'Hello World!';
    }
    async getPatientList() {
        try {
            const dbResult = await database_lib_1.default.query(`SELECT MRN, Age, Sex FROM ppi_patient`);
            const result = {
                isSuccess: true,
                stateCode: 200,
                message: `List of patients list retrurned`,
                result: dbResult,
            };
            return result;
        }
        catch (err) {
            console.log('api 호출 실패');
            console.log(err);
        }
    }
    async getPatientInform(patientMRNDto) {
        try {
            const dbResult = await database_lib_1.default.query(`SELECT * FROM ppi_patient WHERE MRN = ${patientMRNDto.MRN}`);
            if (dbResult[0] == undefined) {
                const result = {
                    isSuccess: false,
                    stateCode: 400,
                    message: `No patient having MRN = ${patientMRNDto.MRN}`
                };
                return result;
            }
            const result = {
                isSuccess: true,
                stateCode: 200,
                message: `[MRN = ${patientMRNDto.MRN}] Information received`,
                result: dbResult,
            };
            return result;
        }
        catch (err) {
            console.log('api 호출 실패');
            console.log(err);
        }
    }
    async getPPIResult(patientMRNDto) {
        try {
            const dbResult = await database_lib_1.default.query(`SELECT * FROM ppi_patient WHERE MRN = ${patientMRNDto.MRN}`);
            if (dbResult[0] == undefined) {
                const result = {
                    isSuccess: false,
                    stateCode: 400,
                    message: `No patient having MRN = ${patientMRNDto.MRN}`
                };
                return result;
            }
            delete dbResult[0].PacemakerImplantation;
            delete dbResult[0].PPMdays;
            delete dbResult[0].MRN;
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.post(process.env.PY_SERVER_URL, dbResult[0]).pipe((0, rxjs_1.map)((res) => res.data)));
            const result = {
                isSuccess: true,
                statusCode: 200,
                message: 'PPI result',
                result: response
            };
            return result;
        }
        catch (err) {
            const result = {
                isSuccess: false,
                statusCode: 400,
                message: err,
            };
            return result;
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map