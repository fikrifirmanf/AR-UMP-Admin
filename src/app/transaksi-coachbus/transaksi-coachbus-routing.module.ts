import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransaksiCoachbusTableComponent } from "./transaksi-coachbus-table/transaksi-coachbus-table.component";

const routes: Routes = [
  {
    path: "",
    component: TransaksiCoachbusTableComponent,
    data: {
      title: "Transaksi Coach Bus",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiCoachbusRoutingModule {}
