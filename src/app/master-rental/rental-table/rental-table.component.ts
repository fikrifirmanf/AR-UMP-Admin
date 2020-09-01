import { Component, ViewChild, OnInit } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";
import { RentalService } from "app/services/rental.service";
import { FormToastrService } from "app/services/toastr.service";

@Component({
  selector: "app-rental-table",
  templateUrl: "./rental-table.component.html",
  styleUrls: ["./rental-table.component.scss"],
  providers: [FormToastrService],
})
export class RentalTableComponent implements OnInit {
  tData: boolean = false;
  rows = [];
  title = "Data Rental Mobil";
  temp = [];

  // Table Column Titles
  columns = [
    { prop: "platNo", name: "No Kendaraan" },
    { prop: "carModel", name: "Model" },
    { prop: "price", name: "Harga" },
    { prop: "manufacturer", name: "Brand" },
    { prop: "stock", name: "Stock" },
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(
    private rentalService: RentalService,
    private toast: FormToastrService
  ) {}

  ngOnInit() {
    this.onShowData();
  }
  onShowData() {
    this.tData = true;
    this.rentalService.getAll(null, null).subscribe(
      (resp) => {
        this.rows = resp["data"];
        console.log(resp["data"]);
        this.temp = resp["data"];
      },
      (err) => console.log(err)
    );
  }

  onDelete(id) {
    this.tData = false;

    this.rentalService.delete(id).subscribe(
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
    console.log(this.temp);
    const temp = this.temp.filter(function (d) {
      return d.platNo.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
