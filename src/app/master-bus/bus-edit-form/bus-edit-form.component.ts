import { Component, OnInit } from "@angular/core";
import { BusService } from "app/services/bus.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { FormToastrService } from "app/services/toastr.service";

@Component({
  selector: "app-bus-edit-form",
  templateUrl: "./bus-edit-form.component.html",
  styleUrls: ["./bus-edit-form.component.css"],
  providers: [FormToastrService],
})
export class BusEditFormComponent implements OnInit {
  constructor(
    private toast: FormToastrService,
    private busService: BusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  id;
  busData = {
    name: "Bus",
    stock: 0,
    price: 0,
  };
  title = "Data Bus";

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getById();
  }

  getById() {
    this.busService.getById(this.id).subscribe(
      (res) => {
        this.busData = res["data"];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit(form: NgForm) {
    this.busService.update(this.id, form.value).subscribe(
      (res) => {
        if (res["message"] === "Updated successfully!") {
          this.router.navigateByUrl("bus");
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
