import { Component, OnInit } from "@angular/core";
import { TransaksiCoachBusService } from "app/services/transaksi-coach-bus.service";
import { FormToastrService } from "app/services/toastr.service";
import { NgForm } from "@angular/forms";
import { BusService } from "app/services/bus.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-transaksi-coachbus-add-form",
  templateUrl: "./transaksi-coachbus-add-form.component.html",
  styleUrls: ["./transaksi-coachbus-add-form.component.css"],
  providers: [FormToastrService],
})
export class TransaksiCoachbusAddFormComponent implements OnInit {
  constructor(
    private transCoachBusService: TransaksiCoachBusService,
    private coachBusSerc: BusService,
    private toast: FormToastrService,
    private router: Router
  ) {}
  listDate = [];
  title = "Transaksi Coach Bus";
  stockAvailable;
  priceData;

  coachBusData = {
    busId: "",
    customerName: "",
    customerEmail: "",
    agentName: "",
    customerTelp: "",
    price: 0,
    addressPoint: "",
    dateStart: this.listDate,
    duration: 0,
    departureTime: "",
    totalBus: "",
    status: "pending",
  };

  ngOnInit(): void {}
  // resetData() {
  //   this.listDate = [];
  // }
  onShowBus(form: NgForm) {
    var startDate = form.controls["startDate"].value;
    var endDate = form.controls["endDate"].value;
    var dateMove = new Date(startDate);
    var strDate = startDate;
    if (this.listDate.length == 0) {
      this.listDate.push(form.controls["startDate"].value);
    }
    // if (form.controls["endDate"].value != "") {
    //   this.listDate.length = 0;
    // }
    else {
      this.listDate.length = 0;
      while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        this.listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
      }
    }

    console.log(this.listDate);
    this.coachBusData.duration = this.listDate.length;
    this.coachBusSerc.getAll().subscribe(
      (resp) => {
        this.coachBusData.busId = resp["data"][0]["_id"];
        this.stockAvailable = resp["data"][0]["stock"];
        console.log(resp["data"][0]["stock"]);
        this.coachBusData.price =
          resp["data"][0]["price"] *
          form.controls["duration"].value *
          form.controls["totalBus"].value;
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    console.log(this.coachBusData);
    this.transCoachBusService.create(this.coachBusData).subscribe(
      (resp) => {
        console.log(resp);
        if (resp["message"] === "Data created successfully!") {
          this.toast.typeSuccess();
          this.router.navigateByUrl("transaksi/bus");
        } else {
          this.toast.typeError();
        }
      },
      (err) => {
        console.log(err);
        this.toast.typeError();
      }
    );
  }
}
