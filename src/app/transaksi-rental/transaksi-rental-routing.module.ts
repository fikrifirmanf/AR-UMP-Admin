import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransaksiRentalTableComponent } from "./transaksi-rental-table/transaksi-rental-table.component";
import { TransaksiRentalAddFormComponent } from "./transaksi-rental-add-form/transaksi-rental-add-form.component";
import { TransaksiRentalEditFormComponent } from "./transaksi-rental-edit-form/transaksi-rental-edit-form.component";
import { TransaksiRentalInvoiceComponent } from "./transaksi-rental-invoice/transaksi-rental-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: TransaksiRentalTableComponent,
    data: { title: "Transaksi Rental Mobil" },
  },
  {
    path: "add",
    component: TransaksiRentalAddFormComponent,
    data: { title: "Transaksi Rental Mobil" },
  },
  {
    path: "edit/:id",
    component: TransaksiRentalEditFormComponent,
    data: { title: "Transaksi Rental Mobil" },
  },
  {
    path: "invoice/:id",
    component: TransaksiRentalInvoiceComponent,
    data: { title: "Transaksi Rental Mobil" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiRentalRoutingModule {}
