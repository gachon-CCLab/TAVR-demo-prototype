"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const patient_dto_1 = require("../dtos/patient.dto");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    getPatientList() {
        let ListDTO;
        console.log(ListDTO);
        for (let i = 0; i < 100; i++) {
            ListDTO[i].MRN = i * 10000 + '';
            ListDTO[i].Age = Math.random() * 80 + 10;
            ListDTO[i].Sex = Math.floor(Math.random() * 2 + 1);
        }
        const result = {
            isSuccess: true,
            statusCode: 200,
            message: 'List of patients',
            result: ListDTO,
        };
        return result;
    }
    getPatientInform() {
        const ptDTO = new patient_dto_1.patientDto();
        ptDTO.MRN = '02006901';
        ptDTO.PacemakerImplatation = true;
        ptDTO.Age = 81.08055556;
        ptDTO.Sex = 2;
        ptDTO.BSA = 2.13;
        ptDTO.BMI = 29.13;
        ptDTO.HTN = true;
        ptDTO.CAD = false;
        ptDTO.DM = false;
        ptDTO.COPD = false;
        ptDTO.AF = false;
        ptDTO.PVD = true;
        ptDTO.CVA = true;
        ptDTO.hemodialysis = true;
        ptDTO.PreviousHeartSergery = true;
        ptDTO.SympomaticAs = true;
        ptDTO.ACEi_ARB = false;
        ptDTO.ACEi_ARB = false;
        ptDTO.Beta_Blocker = false;
        ptDTO.Aldosteroneantagonist = false;
        ptDTO.CCB = true;
        ptDTO.AntiPlateletotherthanASA = true;
        ptDTO.ASA = true;
        ptDTO.AntiPlateletTherapy = true;
        ptDTO.Diuretics = true;
        ptDTO.LVEF = 47;
        ptDTO.SystolicBP = 120;
        ptDTO.DiastolicBP = 78;
        ptDTO.LVOT = 20;
        ptDTO.ValveCode = 3;
        ptDTO.ValveSize = 34;
        ptDTO.BaselineRhythm = 0;
        ptDTO.PR = 240;
        ptDTO.QRS = 170;
        ptDTO.QRSmorethan120 = true;
        ptDTO.FirstdegreeAVblock = true;
        ptDTO.Baseline_conduction_disorder = true;
        ptDTO.BaselineRBBB = true;
        ptDTO.DeltaPR = -20;
        ptDTO.DeltaQRS = 3;
        ptDTO.New_Onset_RBBB = false;
        const result = {
            isSuccess: true,
            statusCode: 200,
            message: 'information of patient',
            result: ptDTO,
        };
        return result;
    }
    getPPIResult() {
        const result = {
            isSuccess: true,
            statusCode: 200,
            message: 'PPI result',
            result: true,
        };
        return result;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map