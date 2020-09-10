import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { env } from "../url.constants";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { User } from "user";
import { UsersService } from "./users.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userServ: UsersService,
    private router: Router
  ) {}
  currentUser;
  headers = new HttpHeaders().set("Content-Type", "application/json");
  private _baseUrl = env.authUrl;

  // Sign-in
  signIn(user: User) {
    return (
      this.http.post<any>(this._baseUrl, user).subscribe((res) => {
        localStorage.setItem("access_token", res.token);
        localStorage.setItem("user_id", res.id);

        this.currentUser = res;
        if (res.status == "Unauthorized") {
          console.log(res.message);
        }
        console.log(res);
        this.router.navigateByUrl("dashboard");
      }),
      (err) => {
        console.log(err);
      }
    );
  }

  getToken() {
    return localStorage.getItem("access_token");
  }
  getUserId() {
    return localStorage.getItem("user_id");
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");

    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem("access_token");

    let removeTokenUser = localStorage.removeItem("user_id");
    if (removeToken == null && removeTokenUser == null) {
      this.router.navigateByUrl("login");
    }
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
