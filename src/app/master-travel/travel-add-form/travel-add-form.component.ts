import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormToastrService } from "app/services/toastr.service";
import { Router } from "@angular/router";
import { TravelService } from "app/services/travel.service";

@Component({
  selector: "app-travel-add-form",
  templateUrl: "./travel-add-form.component.html",
  styleUrls: ["./travel-add-form.component.css"],
  providers: [FormToastrService],
})
export class TravelAddFormComponent implements OnInit {
  title = "Data Travel";
  constructor(
    private router: Router,
    private travelService: TravelService,
    private toast: FormToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.travelService.create(form.value).subscribe(
      (res) => {
        if (res["message"] === "Data created successfully") {
          this.toast.typeSuccess();
          this.router.navigateByUrl("travel");
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
