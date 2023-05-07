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
exports.PpiPatient = void 0;
const typeorm_1 = require("typeorm");
let PpiPatient = class PpiPatient {
};
__decorate([
    (0, typeorm_1.Column)("text", { name: "MRN", nullable: true }),
    __metadata("design:type", String)
], PpiPatient.prototype, "mrn", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "PacemakerImplantation", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "pacemakerImplantation", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "PPMdays", nullable: true }),
    __metadata("design:type", String)
], PpiPatient.prototype, "ppMdays", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { name: "Age", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Sex", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { name: "BSA", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "bsa", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { name: "BMI", nullable: true, precision: 22 }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "bmi", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "HTN", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "htn", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CAD", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "cad", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DM", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "dm", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "COPD", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "copd", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "AF", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "af", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "PVD", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "pvd", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CVA", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "cva", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Hemodialysis", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "hemodialysis", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "PreviousHeartSurgery_Intervention", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "previousHeartSurgeryIntervention", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "SymptomaticAS", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "symptomaticAs", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ACEi_ARB", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "acEiArb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Beta_Blocker", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "betaBlocker", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Aldosteroneantagonist", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "aldosteroneantagonist", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "CCB", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "ccb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "AntiPlateletotherthanASA", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "antiPlateletotherthanAsa", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ASA", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "asa", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "AntiPlateletTherapy", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "antiPlateletTherapy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Diuretics", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "diuretics", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "LVEF", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "lvef", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "SystolicBP", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "systolicBp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DiastolicBP", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "diastolicBp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "LVOT", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "lvot", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ValveCode", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "valveCode", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ValveSize", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "valveSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "BaselineRhythm", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "baselineRhythm", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "PR", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "pr", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "QRS", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "qrs", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "QRSmorethan120", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "qrSmorethan120", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "FirstdegreeAVblock", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "firstdegreeAVblock", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "Baseline_conduction_disorder", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "baselineConductionDisorder", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "BaselineRBBB", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "baselineRbbb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DeltaPR", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "deltaPr", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "DeltaQRS", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "deltaQrs", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "New_Onset_LBBB", nullable: true }),
    __metadata("design:type", Number)
], PpiPatient.prototype, "newOnsetLbbb", void 0);
PpiPatient = __decorate([
    (0, typeorm_1.Entity)("ppi_patient", { schema: "tavr-demo-prototype" })
], PpiPatient);
exports.PpiPatient = PpiPatient;
//# sourceMappingURL=PpiPatient.js.map