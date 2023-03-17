import { Injectable } from '@nestjs/common';
import { patientListDto } from 'src/dtos/patientsList.dto';
import { patientDto } from '../dtos/patient.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPatientList() {
    let ListDTO: patientListDto[]
    console.log(ListDTO);

    for (let i = 0; i < 100; i++) {
      ListDTO[i].MRN = i * 10000 + '';
      ListDTO[i].Age = Math.random() * 80 + 10;
      ListDTO[i].Sex = Math.floor(Math.random() * 2 + 1);
    }

    const result: any = {
      isSuccess: true,
      statusCode: 200,
      message: 'List of patients',
      result: ListDTO,
    };
    return result;
  }

  getPatientInform() {
    const ptDTO: patientDto = new patientDto();
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

    const result: any = {
      isSuccess: true,
      statusCode: 200,
      message: 'information of patient',
      result: ptDTO,
    };
    return result;
  }

  getPPIResult() {
    const result: any = {
      isSuccess: true,
      statusCode: 200,
      message: 'PPI result',
      result: true,
    };
    return result;
  }
}
