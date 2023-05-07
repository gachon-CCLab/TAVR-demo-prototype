import { Column, Entity } from "typeorm";

@Entity("ppi_patient", { schema: "tavr-demo-prototype" })
export class PpiPatient {
  @Column("text", { name: "MRN", nullable: true })
  mrn: string | null;

  @Column("int", { name: "PacemakerImplantation", nullable: true })
  pacemakerImplantation: number | null;

  @Column("text", { name: "PPMdays", nullable: true })
  ppMdays: string | null;

  @Column("double", { name: "Age", nullable: true, precision: 22 })
  age: number | null;

  @Column("int", { name: "Sex", nullable: true })
  sex: number | null;

  @Column("double", { name: "BSA", nullable: true, precision: 22 })
  bsa: number | null;

  @Column("double", { name: "BMI", nullable: true, precision: 22 })
  bmi: number | null;

  @Column("int", { name: "HTN", nullable: true })
  htn: number | null;

  @Column("int", { name: "CAD", nullable: true })
  cad: number | null;

  @Column("int", { name: "DM", nullable: true })
  dm: number | null;

  @Column("int", { name: "COPD", nullable: true })
  copd: number | null;

  @Column("int", { name: "AF", nullable: true })
  af: number | null;

  @Column("int", { name: "PVD", nullable: true })
  pvd: number | null;

  @Column("int", { name: "CVA", nullable: true })
  cva: number | null;

  @Column("int", { name: "Hemodialysis", nullable: true })
  hemodialysis: number | null;

  @Column("int", { name: "PreviousHeartSurgery_Intervention", nullable: true })
  previousHeartSurgeryIntervention: number | null;

  @Column("int", { name: "SymptomaticAS", nullable: true })
  symptomaticAs: number | null;

  @Column("int", { name: "ACEi_ARB", nullable: true })
  acEiArb: number | null;

  @Column("int", { name: "Beta_Blocker", nullable: true })
  betaBlocker: number | null;

  @Column("int", { name: "Aldosteroneantagonist", nullable: true })
  aldosteroneantagonist: number | null;

  @Column("int", { name: "CCB", nullable: true })
  ccb: number | null;

  @Column("int", { name: "AntiPlateletotherthanASA", nullable: true })
  antiPlateletotherthanAsa: number | null;

  @Column("int", { name: "ASA", nullable: true })
  asa: number | null;

  @Column("int", { name: "AntiPlateletTherapy", nullable: true })
  antiPlateletTherapy: number | null;

  @Column("int", { name: "Diuretics", nullable: true })
  diuretics: number | null;

  @Column("int", { name: "LVEF", nullable: true })
  lvef: number | null;

  @Column("int", { name: "SystolicBP", nullable: true })
  systolicBp: number | null;

  @Column("int", { name: "DiastolicBP", nullable: true })
  diastolicBp: number | null;

  @Column("int", { name: "LVOT", nullable: true })
  lvot: number | null;

  @Column("int", { name: "ValveCode", nullable: true })
  valveCode: number | null;

  @Column("int", { name: "ValveSize", nullable: true })
  valveSize: number | null;

  @Column("int", { name: "BaselineRhythm", nullable: true })
  baselineRhythm: number | null;

  @Column("int", { name: "PR", nullable: true })
  pr: number | null;

  @Column("int", { name: "QRS", nullable: true })
  qrs: number | null;

  @Column("int", { name: "QRSmorethan120", nullable: true })
  qrSmorethan120: number | null;

  @Column("int", { name: "FirstdegreeAVblock", nullable: true })
  firstdegreeAVblock: number | null;

  @Column("int", { name: "Baseline_conduction_disorder", nullable: true })
  baselineConductionDisorder: number | null;

  @Column("int", { name: "BaselineRBBB", nullable: true })
  baselineRbbb: number | null;

  @Column("int", { name: "DeltaPR", nullable: true })
  deltaPr: number | null;

  @Column("int", { name: "DeltaQRS", nullable: true })
  deltaQrs: number | null;

  @Column("int", { name: "New_Onset_LBBB", nullable: true })
  newOnsetLbbb: number | null;
}
