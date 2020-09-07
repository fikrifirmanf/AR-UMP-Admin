import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrintReportComponent } from "./print-report.component";

const routes: Routes = [
  {
    path: "",
    component: PrintReportComponent,
    data: {
      title: "Cetak Laporan",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintReportRoutingModule {}
