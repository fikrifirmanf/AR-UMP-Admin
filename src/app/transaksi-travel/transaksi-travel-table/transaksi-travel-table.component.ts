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
    this.getArrayDate();
  }

  getArrayDate() {
    var listDate = [];
    var startDate = "2017-02-01";
    var endDate = "2017-02-10";
    var dateMove = new Date(startDate);
    var strDate = startDate;

    while (strDate < endDate) {
      var strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
      dateMove.setDate(dateMove.getDate() + 1);
    }
    console.log(listDate);
  }

  onShowData() {
    this.transTravelService.getAll().subscribe(
      (resp) => {
        if (resp["total"].length == 0) {
          this.totalTransaksi = 0;
        } else {
          this.totalTransaksi = resp["total"][0]["total"];
        }

        this.rows = resp["data"];
        this.rows = resp["data"];
        console.log(resp);
        console.log();
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
