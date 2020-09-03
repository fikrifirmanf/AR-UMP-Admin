import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm, FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {
  signinForm: FormGroup;

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}

  loginUser(form: NgForm) {
    this.authService.signIn(form.value);
  }
}
