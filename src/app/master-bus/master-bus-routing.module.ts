import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BusTableComponent } from "./bus-table/bus-table.component";
import { BusEditFormComponent } from "./bus-edit-form/bus-edit-form.component";

const routes: Routes = [
  { path: "", component: BusTableComponent },
  { path: "edit/:id", component: BusEditFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterBusRoutingModule {}
