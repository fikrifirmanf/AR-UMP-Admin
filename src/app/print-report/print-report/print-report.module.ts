import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PrintReportRoutingModule } from "./print-report-routing.module";
import { PrintReportComponent } from "./print-report.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [PrintReportComponent],
  imports: [CommonModule, PrintReportRoutingModule, FormsModule],
})
export class PrintReportModule {}
