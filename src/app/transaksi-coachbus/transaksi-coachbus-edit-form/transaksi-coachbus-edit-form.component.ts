import { Component, OnInit } from "@angular/core";
import { TransaksiCoachBusService } from "app/services/transaksi-coach-bus.service";
import { FormToastrService } from "app/services/toastr.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-transaksi-coachbus-edit-form",
  templateUrl: "./transaksi-coachbus-edit-form.component.html",
  styleUrls: ["./transaksi-coachbus-edit-form.component.css"],
  providers: [FormToastrService],
})
export class TransaksiCoachbusEditFormComponent implements OnInit {
  constructor(
    private toast: FormToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private transCoachBusServ: TransaksiCoachBusService
  ) {}
  id;
  title = "Transaksi Coach Bus";
  transDataList = {
    customerName: "",
    customerEmail: "",
    customerTelp: "",
    agentName: "",
    price: 0,
    addressPoint: "",
    dateStart: [],
    departureTime: "",
    duration: 0,
    totalBus: 0,
    status: "",
  };
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.onShowData();
  }

  onShowData() {
    this.transCoachBusServ.getById(this.id).subscribe(
      (resp) => {
        this.transDataList = resp["data"];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    this.transCoachBusServ.update(this.id, form.value).subscribe(
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
