import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { Title } from "@angular/platform-browser";
import { FormToastrService } from "app/services/toastr.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
  providers: [FormToastrService],
})
export class LoginPageComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public authService: AuthService,
    private toast: FormToastrService,
    public router: Router,
    private titleServ: Title
  ) {}

  ngOnInit() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_type");
    this.titleServ.setTitle("AR UMP ADMIN - Login");
  }

  loginUser(form: NgForm) {
    this.authService.signIn(form.value).subscribe(
      (res) => {
        localStorage.setItem("access_token", res.token);
        localStorage.setItem("user_id", res.id);

        // this.currentUser = res;
        // if (res.status == "Unauthorized") {
        //   console.log(res.message);

        this.toast.typeLoginSuccess();
        this.router.navigateByUrl("dashboard");
      },
      (err) => {
        this.toast.typeLoginfailed();
        console.log(err);
      }
    );
  }
}
