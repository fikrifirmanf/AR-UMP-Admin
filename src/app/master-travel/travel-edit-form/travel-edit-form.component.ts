import { Component, OnInit } from "@angular/core";
import { TravelService } from "app/services/travel.service";
import { FormToastrService } from "app/services/toastr.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-travel-edit-form",
  templateUrl: "./travel-edit-form.component.html",
  styleUrls: ["./travel-edit-form.component.css"],
  providers: [FormToastrService],
})
export class TravelEditFormComponent implements OnInit {
  id;
  travelData = {
    kotaAsal: "",
    kotaTujuan: "",
    price: 0,
    stock: 0,
    jam: "",
  };
  title = "Data Travel";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private travelService: TravelService,
    private toast: FormToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getById();
  }

  getById() {
    this.travelService.getById(this.id).subscribe(
      (res) => {
        this.travelData = res["data"];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    this.travelService.update(this.id, form.value).subscribe(
      (res) => {
        if (res["message"] === "Updated successfully!") {
          this.router.navigateByUrl("travel");
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
