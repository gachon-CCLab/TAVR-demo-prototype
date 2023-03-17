import { IsBoolean, IsEmpty, IsNumber, IsString } from 'class-validator';

export class patientDto {
  @IsEmpty()
  @IsString()
  MRN: string;

  @IsEmpty()
  @IsBoolean()
  PacemakerImplatation: boolean;

  @IsNumber()
  PPMdays: number;

  @IsEmpty()
  @IsNumber()
  Age: number;

  @IsEmpty()
  @IsNumber()
  Sex: number;

  @IsEmpty()
  @IsNumber()
  BSA: number;

  @IsEmpty()
  @IsNumber()
  BMI: number;

  @IsEmpty()
  @IsBoolean()
  HTN: boolean;

  @IsEmpty()
  @IsBoolean()
  CAD: boolean;

  @IsEmpty()
  @IsBoolean()
  DM: boolean;

  @IsEmpty()
  @IsBoolean()
  COPD: boolean;

  @IsEmpty()
  @IsBoolean()
  AF: boolean;

  @IsEmpty()
  @IsBoolean()
  PVD: boolean;

  @IsEmpty()
  @IsBoolean()
  CVA: boolean;

  @IsEmpty()
  @IsBoolean()
  hemodialysis: boolean;

  @IsEmpty()
  @IsBoolean()
  PreviousHeartSergery: boolean;

  @IsEmpty()
  @IsBoolean()
  SympomaticAs: boolean;

  @IsEmpty()
  @IsBoolean()
  ACEi_ARB: boolean;

  @IsEmpty()
  @IsBoolean()
  Beta_Blocker: boolean;

  @IsEmpty()
  @IsBoolean()
  Aldosteroneantagonist: boolean;

  @IsEmpty()
  @IsBoolean()
  CCB: boolean;

  @IsEmpty()
  @IsBoolean()
  AntiPlateletotherthanASA: boolean;

  @IsEmpty()
  @IsBoolean()
  ASA: boolean;

  @IsEmpty()
  @IsBoolean()
  AntiPlateletTherapy: boolean;

  @IsEmpty()
  @IsBoolean()
  Diuretics: boolean;

  @IsEmpty()
  @IsNumber()
  LVEF: number;

  @IsEmpty()
  @IsNumber()
  SystolicBP: number;

  @IsEmpty()
  @IsNumber()
  DiastolicBP: number;

  @IsEmpty()
  @IsNumber()
  LVOT: number;

  @IsEmpty()
  @IsNumber()
  ValveCode: number;

  @IsEmpty()
  @IsNumber()
  ValveSize: number;

  @IsEmpty()
  @IsNumber()
  BaselineRhythm: number;

  @IsEmpty()
  @IsNumber()
  PR: number;

  @IsEmpty()
  @IsNumber()
  QRS: number;

  @IsEmpty()
  @IsBoolean()
  QRSmorethan120: boolean;

  @IsEmpty()
  @IsBoolean()
  FirstdegreeAVblock: boolean;

  @IsEmpty()
  @IsBoolean()
  Baseline_conduction_disorder: boolean;

  @IsEmpty()
  @IsBoolean()
  BaselineRBBB: boolean;

  @IsEmpty()
  @IsNumber()
  DeltaPR: number;

  @IsEmpty()
  @IsNumber()
  DeltaQRS: number;

  @IsEmpty()
  @IsBoolean()
  New_Onset_RBBB: boolean;
}
