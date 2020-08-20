import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { RentalRoutingModule } from "./rental-routing.module";
import { RentalTableComponent } from "./rental-table/rental-table.component";
import { FormComponent } from "./form/form.component";
import { FormsModule } from "@angular/forms";
import { ToastrComponentlessModule } from "ngx-toastr";
import { RentalEditComponent } from "./rental-edit/rental-edit.component";

@NgModule({
  imports: [
    CommonModule,
    RentalRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ToastrComponentlessModule,
  ],
  declarations: [RentalTableComponent, FormComponent, RentalEditComponent],
})
export class RentalModule {}
