import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TransaksiCoachbusRoutingModule } from "./transaksi-coachbus-routing.module";
import { TransaksiCoachbusTableComponent } from "./transaksi-coachbus-table/transaksi-coachbus-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TransaksiCoachbusAddFormComponent } from "./transaksi-coachbus-add-form/transaksi-coachbus-add-form.component";

import { NgSelect2Module } from "ng-select2";
import { FormsModule } from "@angular/forms";
import { TransaksiCoachbusInvoiceComponent } from './transaksi-coachbus-invoice/transaksi-coachbus-invoice.component';
import { TransaksiCoachbusEditFormComponent } from './transaksi-coachbus-edit-form/transaksi-coachbus-edit-form.component';

@NgModule({
  declarations: [
    TransaksiCoachbusTableComponent,
    TransaksiCoachbusAddFormComponent,
    TransaksiCoachbusInvoiceComponent,
    TransaksiCoachbusEditFormComponent,
  ],
  imports: [
    CommonModule,
    TransaksiCoachbusRoutingModule,
    NgxDatatableModule,
    FormsModule,
    NgSelect2Module,
  ],
})
export class TransaksiCoachbusModule {}
