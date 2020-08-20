import { Component, OnInit } from "@angular/core";
import { RentalService } from "app/services/rental.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormToastrService } from "app/services/toastr.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-rental-edit",
  templateUrl: "./rental-edit.component.html",
  styleUrls: ["./rental-edit.component.css"],
  providers: [FormToastrService],
})
export class RentalEditComponent implements OnInit {
  id;
  rentalData = {
    platNo: "",
    carModel: "",
    price: 0,
    manufacturer: "",
  };
  title = "Data Rental Mobil";

  constructor(
    private routeServ: Router,
    private rentalService: RentalService,
    private router: ActivatedRoute,
    private toast: FormToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    this.getById();
  }

  getById() {
    this.rentalService.getById(this.id).subscribe(
      (res) => {
        this.rentalData = res["data"];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    this.rentalService.update(this.id, form.value).subscribe(
      (res) => {
        if (res["message"] === "Updated successfully!") {
          this.routeServ.navigateByUrl("rental");
          this.toast.typeSuccess();
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
