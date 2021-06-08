import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterBuildingRoutingModule } from './master-building-routing.module';
import { BuildingTableComponent } from "./building-table/building-table.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelect2Module } from 'ng-select2';
import { BuildingAddComponent } from './building-add/building-add.component';
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { BuildingEditComponent } from './building-edit/building-edit.component';

@NgModule({
  declarations: [    BuildingTableComponent, BuildingAddComponent, BuildingEditComponent,
],
  imports: [
    AgmCoreModule,
    FormsModule,
    NgSelect2Module,
    NgxDatatableModule,
    CommonModule,
    MasterBuildingRoutingModule
  ]
})
export class MasterBuildingModule { }
