import { IsEmpty, IsNumber, IsString } from 'class-validator';

export class patientListDto {
  @IsEmpty()
  @IsString()
  MRN: string;

  @IsEmpty()
  @IsNumber()
  Age: number;

  @IsEmpty()
  @IsNumber()
  Sex: number;
}
