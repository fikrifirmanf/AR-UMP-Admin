import { Component, OnInit } from "@angular/core";
import { TransaksiRentalService } from "app/services/transaksi-rental.service";
import { ActivatedRoute } from "@angular/router";
import { RentalService } from "app/services/rental.service";

@Component({
  selector: "app-transaksi-rental-invoice",
  templateUrl: "./transaksi-rental-invoice.component.html",
  styleUrls: ["./transaksi-rental-invoice.component.css"],
})
export class TransaksiRentalInvoiceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
    private transRentalServ: TransaksiRentalService
  ) {}
  loading = true;
  id;
  transData;
  rentalData;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.onShow();
  }

  onShow() {
    this.transRentalServ.getById(this.id).subscribe(
      (res) => {
        console.log(res);
        this.transData = res["data"];
        this.rentalService
          .getAll(null, res["data"]["carData"]["platNo"])
          .subscribe(
            (resp) => {
              console.log(resp);
              this.rentalData = resp["data"][0];
            },
            (err) => {
              console.log(err);
            }
          );
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
