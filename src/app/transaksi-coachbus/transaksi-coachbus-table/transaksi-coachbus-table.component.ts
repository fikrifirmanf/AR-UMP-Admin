import { Component, OnInit, ViewChild } from "@angular/core";
import { FormToastrService } from "app/services/toastr.service";
import { TransaksiCoachBusService } from "app/services/transaksi-coach-bus.service";
import { ActivatedRoute } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-transaksi-coachbus-table",
  templateUrl: "./transaksi-coachbus-table.component.html",
  styleUrls: ["./transaksi-coachbus-table.component.css"],
  providers: [FormToastrService],
})
export class TransaksiCoachbusTableComponent implements OnInit {
  rows = [];
  temp = [];
  title = "Transaksi Coach Bus";
  id;
  totalTransaksi;
  // Table Column Titles
  columns = [
    { prop: "idTrans", name: "Order ID" },
    { prop: "customerName", name: "Nama" },
    { prop: "dateStart", name: "Tanggal Pesan" },
    { prop: "duration", name: "Durasi (hari)" },
    { prop: "totalBus", name: "Total" },
    { prop: "status", name: "Status" },
    { prop: "_id", name: "Aksi" },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(
    private toast: FormToastrService,
    private transCoachBus: TransaksiCoachBusService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.onShow();
  }

  onShow() {
    this.transCoachBus.getAll().subscribe((resp) => {
      console.log(resp);
      if (resp["total"].length == 0) {
        this.totalTransaksi = 0;
      } else {
        this.totalTransaksi = resp["total"][0]["total"];
      }
      this.rows = resp["data"];
      this.temp = resp["data"];
    });
  }
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
  onDelete(id) {
    this.transCoachBus.delete(id).subscribe((resp) => {
      if (resp["message"] == "Deleted successfully!") {
        this.toast.typeDelete();
        this.onShow();
      } else {
        this.toast.typeError();
      }
    });
  }
}
