import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersTableComponent } from "./users-table/users-table.component";

@NgModule({
  imports: [CommonModule, UsersRoutingModule, NgxDatatableModule],
  declarations: [UsersTableComponent],
})
export class UsersModule {}
