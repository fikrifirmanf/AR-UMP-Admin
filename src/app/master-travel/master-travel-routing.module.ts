import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TravelTableComponent } from "./travel-table/travel-table.component";
import { TravelAddFormComponent } from "./travel-add-form/travel-add-form.component";
import { TravelEditFormComponent } from "./travel-edit-form/travel-edit-form.component";
import { BiroTravelTableComponent } from './biro-travel-table/biro-travel-table.component';

const routes: Routes = [
  { path: "", component: TravelTableComponent },
  { path: "add", component: TravelAddFormComponent },
  { path: "edit/:id", component: TravelEditFormComponent },
  {path: "biro", component: BiroTravelTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterTravelRoutingModule {}
