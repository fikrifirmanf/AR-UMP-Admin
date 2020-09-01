import { Component, OnInit, ViewChild } from "@angular/core";
import { TransaksiTravelService } from "app/services/transaksi-travel.service";
import { FormToastrService } from "app/services/toastr.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-transaksi-travel-table",
  templateUrl: "./transaksi-travel-table.component.html",
  styleUrls: ["./transaksi-travel-table.component.css"],
  providers: [FormToastrService],
})
export class TransaksiTravelTableComponent implements OnInit {
  rows = [];
  temp = [];
  title = "Transaksi Travel";
  totalTransaksi;

  // table column

  columns = [
    { prop: "idTrans", name: "Order ID" },
    { prop: "customerName", name: "Nama" },
    { prop: "departureDate", name: "Tanggal Keberangkatan" },
    { prop: "departureTime", name: "Waktu Keberangkatan" },
    { prop: "status", name: "Status" },
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(
    private transTravelService: TransaksiTravelService,
    private toast: FormToastrService
  ) {}

  ngOnInit(): void {
    this.onShowData();
  }

  onShowData() {
    this.transTravelService.getAll().subscribe(
      (resp) => {
        this.totalTransaksi = resp["total"][0]["total"];
        this.rows = resp["data"];
        this.rows = resp["data"];
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // filter table

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.idTrans.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }

  onDelete(id) {
    this.transTravelService.delete(id).subscribe(
      (resp) => {
        if (resp["message"] === "Deleted successfully!") {
          this.toast.typeDelete();
        } else {
          this.toast.typeError();
        }
        this.onShowData();
      },
      (err) => {
        console.log(err);
        this.toast.typeError();
      }
    );
  }
}
