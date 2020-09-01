import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TransaksiRentalRoutingModule } from "./transaksi-rental-routing.module";
import { TransaksiRentalTableComponent } from "./transaksi-rental-table/transaksi-rental-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TransaksiRentalAddFormComponent } from "./transaksi-rental-add-form/transaksi-rental-add-form.component";
import { FormsModule } from "@angular/forms";
import { NgSelect2Module } from "ng-select2";
import { TransaksiRentalEditFormComponent } from './transaksi-rental-edit-form/transaksi-rental-edit-form.component';
import { TransaksiRentalInvoiceComponent } from './transaksi-rental-invoice/transaksi-rental-invoice.component';

@NgModule({
  declarations: [
    TransaksiRentalTableComponent,
    TransaksiRentalAddFormComponent,
    TransaksiRentalEditFormComponent,
    TransaksiRentalInvoiceComponent,
  ],
  imports: [
    CommonModule,
    TransaksiRentalRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    NgSelect2Module,
  ],
})
export class TransaksiRentalModule {}
