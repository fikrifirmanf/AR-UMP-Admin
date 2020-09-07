import { Component, OnInit } from "@angular/core";
import { FormToastrService } from "app/services/toastr.service";
import { Router, ActivatedRoute } from "@angular/router";
import { TransaksiTravelService } from "app/services/transaksi-travel.service";
import { NgForm } from "@angular/forms";
import { TravelService } from "app/services/travel.service";
import { Select2OptionData } from "ng-select2";

@Component({
  selector: "app-transaksi-travel-edit-form",
  templateUrl: "./transaksi-travel-edit-form.component.html",
  styleUrls: ["./transaksi-travel-edit-form.component.css"],
  providers: [FormToastrService],
})
export class TransaksiTravelEditFormComponent implements OnInit {
  id;

  public travelDataList: Array<Select2OptionData>;
  public travelDataJamList: Array<Select2OptionData>;
  title = "Transaksi Travel";
  travelList = {
    customerName: "",
    customerEmail: "",
    agentName: "",
    customerTelp: "",
    travelData: {
      _id: "",
      from: "",
      destination: "",
      price: 0,
    },
    overPrice: 0,
    departureDate: "",
    departureTime: "",
    totalSeat: 0,
    status: "",
  };
  destinationList = [];
  options;
  listDataTravelUpdate;

  stockAvailable = 0;
  constructor(
    private travelService: TravelService,
    private toast: FormToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private transTravelServ: TransaksiTravelService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.onShow();
    this.onShowData();
  }

  onShow() {
    this.transTravelServ.getById(this.id).subscribe(
      (resp) => {
        this.travelList = resp["data"];
        console.log(resp["data"]);
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
  onShowData() {
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
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // onShowStock(form: NgForm) {
  //   this.transTravelServ.getStock(form.value).subscribe(
  //     (resp) => {
  //       console.log(resp);

  //       this.stockAvailable = resp["data"]["stockAvailable"];
  //       this.travelService.getById(form.controls["idTravel"].value).subscribe(
  //         (resp) => {
  //           this.listDataTravelUpdate = resp["data"];
  //           this.dataTravel.from = resp["data"]["kotaAsal"];
  //           this.dataTravel.destination = resp["data"]["kotaTujuan"];
  //           this.dataTravel.price = resp["data"]["price"];
  //         },
  //         (err) => {
  //           console.log(err);
  //         }
  //       );
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  onSubmit(form: NgForm) {
    this.transTravelServ.update(this.id, form.value).subscribe(
      (resp) => {
        if (resp["message"] === "Updated successfully!") {
          this.toast.typeSuccess();
          this.router.navigateByUrl("transaksi/travel");
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
