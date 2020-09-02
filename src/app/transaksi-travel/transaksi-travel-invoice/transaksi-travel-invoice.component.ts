import { Component, OnInit } from "@angular/core";
import { TransaksiTravelService } from "app/services/transaksi-travel.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-transaksi-travel-invoice",
  templateUrl: "./transaksi-travel-invoice.component.html",
  styleUrls: ["./transaksi-travel-invoice.component.css"],
})
export class TransaksiTravelInvoiceComponent implements OnInit {
  id;
  transaksiTravelList;
  loading = true;
  constructor(
    private route: ActivatedRoute,
    private transTravelServ: TransaksiTravelService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.onShow();
  }

  onShow() {
    this.transTravelServ.getById(this.id).subscribe(
      (resp) => {
        this.transaksiTravelList = resp["data"];
        console.log(resp);
        this.loading = false;
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
