import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersTableComponent } from "./users-table/users-table.component";
import { UsersTravelComponent } from "./users-travel/users-travel.component";
import { UsersRentalComponent } from "./users-rental/users-rental.component";
import { UsersBusComponent } from "./users-bus/users-bus.component";
import { UsersAddFormComponent } from "./users-add-form/users-add-form.component";
import { UserEditFormComponent } from "./user-edit-form/user-edit-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, UsersRoutingModule, NgxDatatableModule, FormsModule],
  declarations: [
    UsersTableComponent,
    UsersTravelComponent,
    UsersRentalComponent,
    UsersBusComponent,
    UsersAddFormComponent,
    UserEditFormComponent,
  ],
})
export class UsersModule {}
