import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";
import { env } from "app/url.constants";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}
  private _baseUrl = env.apiUrl;
  getAllUsers(): Observable<any> {
    const url = this._baseUrl + "users";
    const headers = {
      "X-access-token": "test",
    };
    return this.http
      .get<any>(url, { headers })
      .pipe(
        map((res) => res),
        catchError((err) => {
          console.log("caught mapping error and rethrowing", err);
          return throwError(err);
        }),
        finalize(() => console.log("first finalize() block executed")),
        catchError((err) => {
          console.log("caught rethrown error, providing fallback value");
          return of([]);
        }),
        finalize(() => console.log("second finalize() block executed"))
      );
  }
  getUserType(id): Observable<any> {
    const url = this._baseUrl + "users/type/" + id;
    const headers = {
      "X-access-token": "test",
    };
    return this.http
      .get<any>(url, { headers })
      .pipe(
        map((res) => res),
        catchError((err) => {
          console.log("caught mapping error and rethrowing", err);
          return throwError(err);
        }),
        finalize(() => console.log("first finalize() block executed")),
        catchError((err) => {
          console.log("caught rethrown error, providing fallback value");
          return of([]);
        }),
        finalize(() => console.log("second finalize() block executed"))
      );
  }
}
