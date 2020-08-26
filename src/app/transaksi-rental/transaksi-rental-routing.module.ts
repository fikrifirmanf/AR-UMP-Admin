import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransaksiRentalTableComponent } from "./transaksi-rental-table/transaksi-rental-table.component";

const routes: Routes = [
  {
    path: "",
    component: TransaksiRentalTableComponent,
    data: { title: "Transaksi Rental Mobil" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiRentalRoutingModule {}
