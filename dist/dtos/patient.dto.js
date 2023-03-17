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
exports.patientDto = void 0;
const class_validator_1 = require("class-validator");
class patientDto {
}
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], patientDto.prototype, "MRN", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "PacemakerImplatation", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "PPMdays", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "Age", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "Sex", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "BSA", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "BMI", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "HTN", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "CAD", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "DM", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "COPD", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "AF", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "PVD", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "CVA", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "hemodialysis", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "PreviousHeartSergery", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "SympomaticAs", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "ACEi_ARB", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "Beta_Blocker", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "Aldosteroneantagonist", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "CCB", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "AntiPlateletotherthanASA", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "ASA", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "AntiPlateletTherapy", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "Diuretics", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "LVEF", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "SystolicBP", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "DiastolicBP", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "LVOT", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "ValveCode", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "ValveSize", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "BaselineRhythm", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "PR", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "QRS", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "QRSmorethan120", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "FirstdegreeAVblock", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "Baseline_conduction_disorder", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "BaselineRBBB", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "DeltaPR", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], patientDto.prototype, "DeltaQRS", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], patientDto.prototype, "New_Onset_RBBB", void 0);
exports.patientDto = patientDto;
//# sourceMappingURL=patient.dto.js.map