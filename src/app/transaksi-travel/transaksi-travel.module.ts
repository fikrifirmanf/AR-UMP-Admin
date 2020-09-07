import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TransaksiTravelRoutingModule } from "./transaksi-travel-routing.module";
import { TransaksiTravelTableComponent } from "./transaksi-travel-table/transaksi-travel-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TransaksiTravelAddFormComponent } from "./transaksi-travel-add-form/transaksi-travel-add-form.component";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgSelect2Module } from "ng-select2";
import { MomentModule } from "ngx-moment";
import { TransaksiTravelInvoiceComponent } from './transaksi-travel-invoice/transaksi-travel-invoice.component';
import { TransaksiTravelEditFormComponent } from './transaksi-travel-edit-form/transaksi-travel-edit-form.component';

@NgModule({
  declarations: [
    TransaksiTravelTableComponent,
    TransaksiTravelAddFormComponent,
    TransaksiTravelInvoiceComponent,
    TransaksiTravelEditFormComponent,
  ],
  imports: [
    CommonModule,
    TransaksiTravelRoutingModule,
    NgxDatatableModule,
    FormsModule,
    NgSelectModule,
    NgSelect2Module,
    MomentModule,
  ],
})
export class TransaksiTravelModule {}
