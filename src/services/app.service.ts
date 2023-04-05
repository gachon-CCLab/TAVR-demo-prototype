import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import axios from 'axios';
import { get } from 'http';
import { patientListDto } from 'src/dtos/patientsList.dto';
import Database from 'src/libraries/database.lib';
import { patientDto } from '../dtos/patient.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  // 환자 정보 리스트 출력 API -------------------------------------------------------- 
  async getPatientList() {
    try {
      const dbResult: any = await Database.query(`SELECT MRN, Age, Sex FROM ppi_patient`);
      const result: any = {
        isSuccess: true,
        stateCode: 200,
        message: `List of patients list retrurned`,
        result: dbResult,
      };
      return result;
    } catch (err: any) {
      console.log('api 호출 실패');
      console.log(err);
    }
  }
  // 환자 정보 리스트 출력 API 끝 ========================================================

  // 환자 세부 정보 출력 API -------------------------------------------------------- 
  async getPatientInform(patientMRNDto) {
    try {
      const dbResult: any = await Database.query(`SELECT * FROM ppi_patient WHERE MRN = ${patientMRNDto.MRN}`);
      if (dbResult[0] == undefined) {
        const result: any = {
          isSuccess: false,
          stateCode: 400,
          message: `No patient having MRN = ${patientMRNDto.MRN}`
        };
        return result;
      }
      const result: any = {
        isSuccess: true,
        stateCode: 200,
        message: `[MRN = ${patientMRNDto.MRN}] Information received`,
        result: dbResult,
      };
      return result;
    } catch (err: any) {
      console.log('api 호출 실패');
      console.log(err);
    }
  }
  // 환자 세부 정보 출력 API 끝 ========================================================

  // 환자 PPI 결과 출력 API -------------------------------------------------------- 
  async getPPIResult() {
    try {
      const response = await this.httpService.get(process.env.PY_SERVER_URL).toPromise();
      console.log(response);
      const result: any = {
        isSuccess: true,
        statusCode: 200,
        message: 'PPI result',
        result: response.data
      };
      return result;
    } catch (err: any) {
      const result: any = {
        isSuccess: false,
        statusCode: 400,
        message: err,
      };
      return result;
    }
  }
  // 환자 PPI 결과 출력 API 끝 ========================================================
}
