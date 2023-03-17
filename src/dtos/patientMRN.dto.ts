import { IsEmpty, IsString } from 'class-validator';

export class patientMRNDto {
  @IsEmpty()
  @IsString()
  MRN: string;
}
