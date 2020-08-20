import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TravelTableComponent } from "./travel-table/travel-table.component";

const routes: Routes = [{ path: "", component: TravelTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterTravelRoutingModule {}
