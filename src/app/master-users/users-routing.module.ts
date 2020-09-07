import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersTableComponent } from "./users-table/users-table.component";
import { UsersTravelComponent } from "./users-travel/users-travel.component";
import { UsersRentalComponent } from "./users-rental/users-rental.component";
import { UsersBusComponent } from "./users-bus/users-bus.component";
import { UsersAddFormComponent } from "./users-add-form/users-add-form.component";
import { UserEditFormComponent } from "./user-edit-form/user-edit-form.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "admin",
        component: UsersTableComponent,
        data: {
          title: "Admin",
        },
      },
      {
        path: "rental",
        component: UsersRentalComponent,
        data: {
          title: "Agen Rental",
        },
      },
      {
        path: "travel",
        component: UsersTravelComponent,
        data: {
          title: "Agen Travel",
        },
      },
      {
        path: "bus",
        component: UsersBusComponent,
        data: {
          title: "Agen Coach Bus",
        },
      },
      {
        path: "add",
        component: UsersAddFormComponent,
        data: {
          title: "Tambah Data",
        },
      },
      {
        path: "edit/:id",
        component: UserEditFormComponent,
        data: {
          title: "Edit Data",
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
