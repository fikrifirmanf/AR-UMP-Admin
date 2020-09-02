import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TransaksiCoachbusRoutingModule } from "./transaksi-coachbus-routing.module";
import { TransaksiCoachbusTableComponent } from "./transaksi-coachbus-table/transaksi-coachbus-table.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TransaksiCoachbusAddFormComponent } from './transaksi-coachbus-add-form/transaksi-coachbus-add-form.component';

@NgModule({
  declarations: [TransaksiCoachbusTableComponent, TransaksiCoachbusAddFormComponent],
  imports: [CommonModule, TransaksiCoachbusRoutingModule, NgxDatatableModule],
})
export class TransaksiCoachbusModule {}
