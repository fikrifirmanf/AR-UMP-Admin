import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    private titleServ: Title
  ) {}

  ngOnInit() {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_type");
    this.titleServ.setTitle("The 8888 Family - Login");
  }

  loginUser(form: NgForm) {
    this.authService.signIn(form.value);
  }
}
