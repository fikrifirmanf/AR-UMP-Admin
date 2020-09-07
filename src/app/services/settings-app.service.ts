import { Injectable } from "@angular/core";
import { env } from "app/url.constants";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError, map, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SettingsAppService {
  constructor(private http: HttpClient) {}

  private _baseUrl = env.apiUrl + "statistik";

  getAll(): Observable<any> {
    return this.http.get<any>(this._baseUrl).pipe(
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
