import { Component, OnInit } from "@angular/core";
import { TransaksiTravelService } from "app/services/transaksi-travel.service";
import { FormToastrService } from "app/services/toastr.service";
import { NgForm } from "@angular/forms";
import { TravelService } from "app/services/travel.service";
import { Select2OptionData } from "ng-select2";
import { Router } from "@angular/router";

@Component({
  selector: "app-transaksi-travel-add-form",
  templateUrl: "./transaksi-travel-add-form.component.html",
  styleUrls: ["./transaksi-travel-add-form.component.css"],
  providers: [FormToastrService],
})
export class TransaksiTravelAddFormComponent implements OnInit {
  constructor(
    private transTravelService: TransaksiTravelService,
    private travelService: TravelService,
    private toast: FormToastrService,
    private router: Router
  ) {}
  forms: NgForm;
  public travelDataList: Array<Select2OptionData>;
  public travelDataJamList: Array<Select2OptionData>;
  options;
  dataTravel = {
    from: "",
    destination: "",
    price: 0,
    overPrice: 0,
  };
  stockAvailable = 0;
  listDataTravelUpdate;
  loading = true;
  title = "Transaksi Travel";
  destinationList = [];
  ngOnInit(): void {
    this.onShow();
  }
  // bodyOnStock = {
  //   idTravel: "",
  //   departureDate: "",
  //   departureTime: "",
  // };
  onShowStock(form: NgForm) {
    this.transTravelService.getStock(form.value).subscribe(
      (resp) => {
        console.log(resp);

        this.stockAvailable = resp["data"]["stockAvailable"];
        this.travelService.getById(form.controls["idTravel"].value).subscribe(
          (resp) => {
            this.listDataTravelUpdate = resp["data"];
            this.dataTravel.from = resp["data"]["kotaAsal"];
            this.dataTravel.destination = resp["data"]["kotaTujuan"];
            this.dataTravel.price = resp["data"]["price"];
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onShowJam(form: NgForm) {
    this.travelService.getById(form.controls["idTravel"].value).subscribe(
      (resp) => {
        console.log(resp);
        var arr = [];

        for (let i = 0; i < resp["data"]["jam"].length; i++) {
          var x = resp["data"]["jam"][i];

          arr.push({ id: x, text: x });
        }
        // console.log(arr);
        this.travelDataJamList = arr;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onShow() {
    this.options = {
      width: "340",
      height: "100",
    };
    this.travelService.getAll().subscribe(
      (resp) => {
        console.log(resp);
        this.travelDataList = resp["data"];

        var arr = [];

        for (let i = 0; i < resp["data"].length; i++) {
          var x = resp["data"][i]["_id"];
          var t = resp["data"][i]["kotaAsal"];
          var y = resp["data"][i]["kotaTujuan"];

          arr.push({ id: x, text: t + "-" + y });
        }
        // console.log(arr);
        this.destinationList = arr;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.transTravelService.create(form.value).subscribe(
      (resp) => {
        console.log(resp);
        if (resp["message"] === "Data created successfully!") {
          this.toast.typeSuccess();
          this.router.navigateByUrl("transaksi/travel");
        } else {
          this.toast.typeError();
        }
      },
      (err) => {
        this.toast.typeError();
        console.log(err);
      }
    );
  }
}
