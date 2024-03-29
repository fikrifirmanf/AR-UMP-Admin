import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingAddComponent } from './building-add/building-add.component';
import { BuildingEditComponent } from './building-edit/building-edit.component';
import { BuildingTableComponent } from './building-table/building-table.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "fakultas",component: BuildingTableComponent, data: {
          cat: 'fakultas'
        },},

        {path: "lain",component: BuildingTableComponent, data: {
          cat: 'lain'
        },},
        {
          path: "add", component: BuildingAddComponent
        },
        {
          path: "edit/:id", component: BuildingEditComponent
        },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterBuildingRoutingModule { }
