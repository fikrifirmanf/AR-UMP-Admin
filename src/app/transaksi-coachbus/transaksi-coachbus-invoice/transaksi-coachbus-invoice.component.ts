import { Component, OnInit } from "@angular/core";
import { TransaksiCoachBusService } from "app/services/transaksi-coach-bus.service";
import { ActivatedRoute } from "@angular/router";
import { BusService } from "app/services/bus.service";

@Component({
  selector: "app-transaksi-coachbus-invoice",
  templateUrl: "./transaksi-coachbus-invoice.component.html",
  styleUrls: ["./transaksi-coachbus-invoice.component.css"],
})
export class TransaksiCoachbusInvoiceComponent implements OnInit {
  constructor(
    private transCoachBusServ: TransaksiCoachBusService,
    private route: ActivatedRoute,
    private coachBusServ: BusService
  ) {}
  id;
  loading = true;
  tranCoacBusDataList;
  coachBusList;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.onShow();
  }
  onShow() {
    this.transCoachBusServ.getById(this.id).subscribe(
      (resp) => {
        this.tranCoacBusDataList = resp["data"];
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
    this.coachBusServ.getAll().subscribe(
      (resp) => {
        this.coachBusList = resp["data"][0];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onPrint(idName) {
    let printContent = document.getElementById(idName).innerHTML;
    let originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  }
}
