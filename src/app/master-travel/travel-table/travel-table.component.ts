import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { FormToastrService } from "app/services/toastr.service";
import { TravelService } from "app/services/travel.service";

@Component({
  selector: "app-travel-table",
  templateUrl: "./travel-table.component.html",
  styleUrls: ["./travel-table.component.css"],
  providers: [FormToastrService],
})
export class TravelTableComponent implements OnInit {
  tData: boolean = false;
  rows = [];
  title = "Data Travel";
  temp = [];

  // Table Column Titles
  columns = [
    { prop: "kotaAsal", name: "Kota Asal" },
    { prop: "kotaTujuan", name: "Kota Tujuan" },
    { prop: "price", name: "Harga" },
    { prop: "stock", name: "Stok Kursi" },
    { prop: "jam", name: "Jam Keberangkatan" },
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(
    private travelService: TravelService,
    private toast: FormToastrService
  ) {}

  ngOnInit() {
    this.onShowData();
  }
  onShowData() {
    this.tData = true;
    this.travelService.getAll().subscribe(
      (resp) => {
        this.rows = resp["data"];
        this.temp = resp["data"];
      },
      (err) => console.log(err)
    );
  }

  onDelete(id) {
    this.tData = false;

    this.travelService.delete(id).subscribe(
      (res) => {
        if (res["message"] === "Deleted successfully!") {
          this.toast.typeDelete();
        } else {
          this.toast.typeError();
        }
        this.onShowData();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // testUsers() {
  //   this.userService.getAllUsers().subscribe(
  //     (resp) => {
  //       this.rows = resp["data"];
  //       this.temp = resp["data"];
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
