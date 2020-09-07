import { Component, OnInit } from "@angular/core";
import { UsersService } from "app/services/users.service";
import { FormToastrService } from "app/services/toastr.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-users-add-form",
  templateUrl: "./users-add-form.component.html",
  styleUrls: ["./users-add-form.component.css"],
  providers: [FormToastrService],
})
export class UsersAddFormComponent implements OnInit {
  constructor(
    private userservice: UsersService,
    private toast: FormToastrService
  ) {}

  ngOnInit(): void {}
  title = "Tambah Data User";
  onSubmit(form: NgForm) {
    this.userservice.create(form.value).subscribe(
      (resp) => {
        console.log(resp);
        if (resp["message"] == "Created data successfully!") {
          this.toast.typeSuccess();
        } else if (resp.length == 0) {
          this.toast.typeErrorUsername();
        }
      },
      (err) => {
        console.log(err);
        if (
          err["message"]["errors"]["username"]["message"] ==
          "Username sudah ada"
        ) {
          this.toast.typeErrorUsername();
        } else {
          this.toast.typeError();
        }
      }
    );
  }
}
