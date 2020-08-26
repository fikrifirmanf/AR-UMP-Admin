import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TransaksiRentalRoutingModule } from "./transaksi-rental-routing.module";
import { TransaksiRentalTableComponent } from "./transaksi-rental-table/transaksi-rental-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [TransaksiRentalTableComponent],
  imports: [
    CommonModule,
    TransaksiRentalRoutingModule,
    NgxDatatableModule,
    NgbModule,
  ],
})
export class TransaksiRentalModule {}
