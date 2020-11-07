import { Component, OnInit } from "@angular/core";
import { TransaksiRentalService } from "app/services/transaksi-rental.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { FormToastrService } from "app/services/toastr.service";
import { RentalService } from "app/services/rental.service";

@Component({
  selector: "app-transaksi-rental-edit-form",
  templateUrl: "./transaksi-rental-edit-form.component.html",
  styleUrls: ["./transaksi-rental-edit-form.component.css"],
  providers: [FormToastrService],
})
export class TransaksiRentalEditFormComponent implements OnInit {
  constructor(
    private toast: FormToastrService,
    private transRentalServ: TransaksiRentalService,
    private route: ActivatedRoute,
    private router: Router,
    private rentalService: RentalService
  ) {}
  id;
  form: NgForm;
  title = "Transaksi Rental Mobil";
  carModel = "";
  rentalData = {
    customerName: "",
    customerEmail: "",
    customerTelp: "",
    carData: {
      platNo: "",
      price: 0,
    },
    biroData : {
      biroId: "",
      biroName: ""
    },
    duration: 0,
    hours: "",
    agentName: "",
    dateStart: "",
    dateFinish: "",
    timeStart: "",
    status: "",
  };
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getById();
  }

  // getDataByPlat(form: NgForm) {
  //   this.rentalService
  //     .getAll(null, this.form.controls["platNo"].value)
  //     .subscribe(
  //       (res) => {
  //         // console.log(res["data"][0]["price"]);
  //         this.carModel = res["data"]["carModel"];
  //         console.log(res["data"]["carModel"]);
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  // }
  // onClik(form: NgForm) {
  //   this.rentalService.getAll(1, form.controls["platNo"].value).subscribe(
  //     (res) => {
  //       // console.log(res["data"][0]["price"]);
  //       if (res["data"][0]["price"]) {
  //         this.rentalData.price =
  //           res["data"][0]["price"] * form.controls["duration"].value;
  //       } else {
  //         console.log("cek");
  //       }
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
  getById() {
    this.transRentalServ.getById(this.id).subscribe(
      (res) => {
        this.rentalData = res["data"];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    this.transRentalServ.update(this.id, form.value).subscribe(
      (res) => {
        if (res["message"] === "Updated successfully!") {
          this.toast.typeSuccess();
          // console.log(res);
          this.router.navigateByUrl("transaksi/rental");
        } else {
          this.toast.typeError();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
