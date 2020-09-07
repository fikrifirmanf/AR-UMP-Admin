import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersTableComponent } from "./users-table/users-table.component";
import { UsersTravelComponent } from "./users-travel/users-travel.component";
import { UsersRentalComponent } from "./users-rental/users-rental.component";
import { UsersBusComponent } from "./users-bus/users-bus.component";

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
