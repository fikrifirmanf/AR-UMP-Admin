import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransaksiCoachbusTableComponent } from "./transaksi-coachbus-table/transaksi-coachbus-table.component";
import { TransaksiCoachbusAddFormComponent } from "./transaksi-coachbus-add-form/transaksi-coachbus-add-form.component";
import { TransaksiCoachbusInvoiceComponent } from "./transaksi-coachbus-invoice/transaksi-coachbus-invoice.component";
import { TransaksiCoachbusEditFormComponent } from "./transaksi-coachbus-edit-form/transaksi-coachbus-edit-form.component";

const routes: Routes = [
  {
    path: "",
    component: TransaksiCoachbusTableComponent,
    data: {
      title: "Transaksi Coach Bus",
    },
  },
  {
    path: "add",
    component: TransaksiCoachbusAddFormComponent,
    data: {
      title: "Transaksi Coach Bus",
    },
  },
  {
    path: "invoice/:id",
    component: TransaksiCoachbusInvoiceComponent,
    data: {
      title: "Transaksi Coach Bus",
    },
  },
  {
    path: "edit/:id",
    component: TransaksiCoachbusEditFormComponent,
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
