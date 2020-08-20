import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RentalTableComponent } from "./rental-table/rental-table.component";
import { FormComponent } from "./form/form.component";
import { RentalEditComponent } from "./rental-edit/rental-edit.component";

const routes: Routes = [
  {
    path: "",
    component: RentalTableComponent,
    data: {
      title: "Agen Rental Mobil",
    },
  },
  {
    path: "add",
    component: FormComponent,
    data: {
      title: "Tambah data",
    },
  },
  {
    path: "edit/:id",
    component: RentalEditComponent,
    data: {
      title: "Edit data",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalRoutingModule {}
