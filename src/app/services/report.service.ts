import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { env } from "../url.constants";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ReportService {
  private _baseUrl = env.apiUrl + "print/";
  constructor(private http: HttpClient) {}

  getReportRental(body): Observable<any> {
    return this.http.post(this._baseUrl + "rental", body).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Rethrown error", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
  getReportTravel(body): Observable<any> {
    return this.http.post(this._baseUrl + "travel", body).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Rethrown error", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
  getReportCoachBus(body): Observable<any> {
    return this.http.post(this._baseUrl + "bus", body).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Rethrown error", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
}
