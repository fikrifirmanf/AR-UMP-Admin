import { Component, OnInit } from "@angular/core";
import { ReportService } from "app/services/report.service";
import { NgForm } from "@angular/forms";
import * as jsPDF from "jspdf";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-print-report",
  templateUrl: "./print-report.component.html",
  styleUrls: ["./print-report.component.css"],
})
export class PrintReportComponent implements OnInit {
  title = "Cetak Laporan";
  listTrans;
  titleLaporan;
  transaksiTitle;
  totalPrice;
  dateNow = formatDate(new Date(), "dd-MM-yyyy", "en");

  loading = true;
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    var pilih = form.controls["transaksi"].value;
    console.log(form.value);
    if (pilih === "travel") {
      this.transaksiTitle = "travel";
      this.titleLaporan = "Laporan Transaksi Travel";
      this.listTrans = this.reportService.getReportTravel(form.value).subscribe(
        (resp) => {
          var arr = [];
          console.log(resp);
          this.listTrans = resp["data"];
          this.loading = false;

          for (let i = 0; i < resp["data"].length; i++) {
            var x = resp["data"][i]["travelData"]["price"];
            arr.push(x);
          }
          this.totalPrice = arr.reduce((a, b) => a + b, 0);
          // console.log(arr.reduce((a, b) => a + b, 0));
        },
        (err) => {
          console.log(err);
        }
      );
    } else if (pilih === "rental") {
      this.transaksiTitle = "rental";
      this.titleLaporan = "Laporan Transaksi Rental";
      this.listTrans = this.reportService.getReportRental(form.value).subscribe(
        (resp) => {
          var arr = [];
          console.log(resp);
          this.listTrans = resp["data"];
          this.loading = false;
          // this.onPrint(idName);

          for (let i = 0; i < resp["data"].length; i++) {
            var x = resp["data"][i]["carData"]["price"];
            arr.push(x);
          }
          this.totalPrice = arr.reduce((a, b) => a + b, 0);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.transaksiTitle = "coachbus";
      this.titleLaporan = "Laporan Transaksi Coach Bus";
      this.listTrans = this.reportService
        .getReportCoachBus(form.value)
        .subscribe(
          (resp) => {
            var arr = [];
            console.log(resp);
            this.listTrans = resp["data"];
            this.loading = false;
            // this.onPrint(idName);
            for (let i = 0; i < resp["data"].length; i++) {
              var x = resp["data"][i]["price"];
              arr.push(x);
            }
            this.totalPrice = arr.reduce((a, b) => a + b, 0);
          },
          (err) => {
            console.log(err);
          }
        );
    }
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
