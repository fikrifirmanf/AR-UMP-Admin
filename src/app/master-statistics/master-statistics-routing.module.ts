import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorStatisticsTableComponent } from './visitor-statistics-table/visitor-statistics-table.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "visitor", component: VisitorStatisticsTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterStatisticsRoutingModule { }
