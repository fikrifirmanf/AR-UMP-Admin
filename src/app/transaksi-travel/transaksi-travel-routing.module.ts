import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransaksiTravelTableComponent } from "./transaksi-travel-table/transaksi-travel-table.component";
import { TransaksiTravelAddFormComponent } from "./transaksi-travel-add-form/transaksi-travel-add-form.component";
import { TransaksiTravelInvoiceComponent } from "./transaksi-travel-invoice/transaksi-travel-invoice.component";
import { TransaksiTravelEditFormComponent } from "./transaksi-travel-edit-form/transaksi-travel-edit-form.component";

const routes: Routes = [
  {
    path: "",
    component: TransaksiTravelTableComponent,
    data: {
      title: "Transaksi Travel",
    },
  },
  {
    path: "add",
    component: TransaksiTravelAddFormComponent,
    data: {
      title: "Transaksi Travel",
    },
  },
  {
    path: "invoice/:id",
    component: TransaksiTravelInvoiceComponent,
    data: {
      title: "Transaksi Travel",
    },
  },
  {
    path: "edit/:id",
    component: TransaksiTravelEditFormComponent,
    data: {
      title: "Transaksi Travel",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiTravelRoutingModule {}
