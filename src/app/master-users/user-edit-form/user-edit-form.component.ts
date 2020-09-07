import { Component, OnInit } from "@angular/core";
import { UsersService } from "app/services/users.service";
import { FormToastrService } from "app/services/toastr.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-user-edit-form",
  templateUrl: "./user-edit-form.component.html",
  styleUrls: ["./user-edit-form.component.css"],
  providers: [FormToastrService],
})
export class UserEditFormComponent implements OnInit {
  title = "Ubah Data";
  id;
  userList;
  userDataList = {
    name: "",
    username: "",
    password: "",
    email: "",
    mobileNum: "",
    address: "",
    userType: "",
  };
  constructor(
    private userService: UsersService,
    private toast: FormToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.showById();
  }

  showById() {
    this.userService.getById(this.id).subscribe(
      (resp) => {
        this.userDataList = resp["data"];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSubmit(form: NgForm) {
    this.userService.update(this.id, form.value).subscribe(
      (resp) => {
        if (resp["message"] == "Updated successfully!") {
          this.toast.typeSuccess();
          // this.router.navigateByUrl(
          //   "users/" + (form.controls["userType"].value == "coachbus")
          //     ? "bus"
          //     : form.controls["userType"].value
          // );
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
