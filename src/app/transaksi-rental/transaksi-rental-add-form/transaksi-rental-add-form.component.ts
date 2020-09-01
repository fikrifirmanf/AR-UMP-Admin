import { Component, OnInit } from "@angular/core";
import { TransaksiRentalService } from "app/services/transaksi-rental.service";
import { FormToastrService } from "app/services/toastr.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { RentalService } from "app/services/rental.service";
import { Options } from "select2";
import { Select2OptionData } from "ng-select2";

@Component({
  selector: "app-transaksi-rental-add-form",
  templateUrl: "./transaksi-rental-add-form.component.html",
  styleUrls: ["./transaksi-rental-add-form.component.css"],
  providers: [FormToastrService],
})
export class TransaksiRentalAddFormComponent implements OnInit {
  public carData: Array<Select2OptionData>;
  title = "Transaksi Rental Mobil";
  public options: Options;
  price = 0;
  constructor(
    private router: Router,
    private transRentalServ: TransaksiRentalService,
    private toast: FormToastrService,
    private rentalService: RentalService
  ) {}

  ngOnInit(): void {
    this.getRentalData();
  }

  getRentalData() {
    this.options = {
      width: "340",
      height: "100",
    };
    this.rentalService.getAll(1, null).subscribe(
      (resp) => {
        // this.carData = resp["data"];
        // console.log(resp["data"]);
        var arr = [];

        for (let i = 0; i < resp["data"].length; i++) {
          var x = resp["data"][i]["platNo"];
          var t = resp["data"][i]["carModel"];

          arr.push({ id: x, text: x + "-" + t });
        }
        console.log(arr);
        this.carData = arr;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onClik(form: NgForm) {
    this.rentalService.getAll(1, form.controls["platNo"].value).subscribe(
      (res) => {
        // console.log(res["data"][0]["price"]);
        if (res["data"][0]["price"]) {
          this.price =
            res["data"][0]["price"] * form.controls["duration"].value;
        } else {
          console.log("cek");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.transRentalServ.create(form.value).subscribe(
      (resp) => {
        console.log(resp);
        if (resp["message"] == "Data created successfully") {
          this.toast.typeSuccess();
          this.router.navigateByUrl("transaksi/rental");
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
