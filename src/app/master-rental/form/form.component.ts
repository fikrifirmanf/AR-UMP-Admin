import { Component, OnInit } from "@angular/core";
import { RentalService } from "app/services/rental.service";
import { NgForm } from "@angular/forms";
import { FormToastrService } from "app/services/toastr.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  providers: [FormToastrService],
})
export class FormComponent implements OnInit {
  title = "Data Rental Mobil";
  constructor(
    private router: Router,
    private rentalService: RentalService,
    private toast: FormToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.rentalService.create(form.value).subscribe(
      (res) => {
        if (res["message"] === "Data created successfully") {
          this.toast.typeSuccess();
          this.router.navigateByUrl("rental");
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
