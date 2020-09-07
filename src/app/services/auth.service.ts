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

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  currentUser;
  headers = new HttpHeaders().set("Content-Type", "application/json");
  private _baseUrl = env.authUrl;

  // Sign-in
  signIn(user: User) {
    return (
      this.http.post<any>(this._baseUrl, user).subscribe((res) => {
        localStorage.setItem("access_token", res.token);
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

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem("access_token");
    if (removeToken == null) {
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