import { Component, OnInit, ViewChild } from "@angular/core";
import { FormToastrService } from "app/services/toastr.service";
import { BusService } from "app/services/bus.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-bus-table",
  templateUrl: "./bus-table.component.html",
  styleUrls: ["./bus-table.component.css"],
  providers: [FormToastrService],
})
export class BusTableComponent implements OnInit {
  tData: boolean = false;
  rows = [];
  title = "Data Bus";
  temp = [];

  // Table Column Titles
  columns = [
    { prop: "name", name: "Nama" },
    { prop: "price", name: "Harga" },
    { prop: "stock", name: "Stok Bus" },
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(
    private busService: BusService,
    private toast: FormToastrService
  ) {}

  ngOnInit() {
    this.onShowData();
  }
  onShowData() {
    this.tData = true;
    this.busService.getAll().subscribe(
      (resp) => {
        this.rows = resp["data"];
        this.temp = resp["data"];
      },
      (err) => console.log(err)
    );
  }

  onDelete(id) {
    this.tData = false;

    this.busService.delete(id).subscribe(
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
