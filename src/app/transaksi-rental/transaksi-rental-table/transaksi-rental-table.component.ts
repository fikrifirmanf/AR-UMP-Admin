import { Component, OnInit, ViewChild } from "@angular/core";
import { TransaksiRentalService } from "app/services/transaksi-rental.service";
import { FormToastrService } from "app/services/toastr.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-transaksi-rental-table",
  templateUrl: "./transaksi-rental-table.component.html",
  styleUrls: ["./transaksi-rental-table.component.css"],
  providers: [FormToastrService],
})
export class TransaksiRentalTableComponent implements OnInit {
  tData: boolean = false;
  rows = [];
  title = "Transaksi Rental Mobil";
  temp = [];
  totalTransaksi;

  // Table Column Titles
  columns = [
    { prop: "idTrans", name: "Order ID" },
    { prop: "carData.platNo", name: "No Kendaraan" },
    { prop: "customerName", name: "Nama" },
    { prop: "dateStart", name: "Tanggal Rental" },
    { prop: "duration", name: "Durasi (hari)" },
    { prop: "status", name: "Status" },
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(
    private transRentalServ: TransaksiRentalService,
    private toast: FormToastrService
  ) {}

  ngOnInit() {
    this.onShowData();
  }
  onShowData() {
    this.tData = true;
    this.transRentalServ.getAll().subscribe(
      (resp) => {
        // console.log(resp);
        // console.log(resp["total"][0]["total"]);
        if (resp["total"].length == 0) {
          this.totalTransaksi = 0;
        } else {
          this.totalTransaksi = resp["total"][0]["total"];
        }
        this.rows = resp["data"];
        this.temp = resp["data"];
      },
      (err) => console.log(err)
    );
  }

  onDelete(id) {
    this.tData = false;

    this.transRentalServ.delete(id).subscribe(
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
      return d.idTrans.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
