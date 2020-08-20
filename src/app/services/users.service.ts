import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}
  _baseUrl = "http://13.212.50.150/api/";
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
}
