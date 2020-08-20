import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UsersTableComponent } from "./users-table/users-table.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "rental",
        component: UsersTableComponent,
        data: {
          title: "Agen Rental Mobil",
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
