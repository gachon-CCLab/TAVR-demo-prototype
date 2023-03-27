import { Body, Controller, Get, Post } from '@nestjs/common';
import { patientMRNDto } from 'src/dtos/patientMRN.dto';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/tavr/patient/inform')
  getPatientInform(@Body() patientMRNDto: patientMRNDto) {
    return this.appService.getPatientInform(patientMRNDto);
  }

  @Get('/tavr/patient/list')
  getPatientList() {
    return this.appService.getPatientList();
  }

  @Post('/tavr/patient/ppi')
  getPPIresult(@Body() patientMRNDto: patientMRNDto) {
    return this.appService.getPPIResult();
  }
}
