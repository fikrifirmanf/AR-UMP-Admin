import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { env } from "../url.constants";
import { Observable, throwError, of } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TransaksiTravelService {
  constructor(private http: HttpClient) {}
  private _baseUrl = env.apiUrl + "order/travel";

  getAll(): Observable<any> {
    const headers = {
      "Content-Type": "application/json",
    };
    return this.http.get(this._baseUrl, { headers }).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Mapping rethriwn error fallback error", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
  getStock(
    body = {
      idTravel: "",
      departureDate: "",
      departureTime: "",
    }
  ): Observable<any> {
    const headers = {
      "Content-Type": "application/json",
    };

    return this.http.post(this._baseUrl, body, { headers }).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Mapping rethriwn error fallback error", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
  getById(id): Observable<any> {
    const headers = {
      "Content-Type": "application/json",
    };
    return this.http.get(this._baseUrl + "/" + id, { headers }).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Rethrown Error mapping", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
  create(body): Observable<any> {
    const headers = {
      "Content-type": "application/json",
    };
    return this.http.post(this._baseUrl + "/add", body, { headers }).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Rethrown error mapping", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
  update(id, body): Observable<any> {
    const headers = {
      "Content-type": "application/json",
    };
    return this.http.patch(this._baseUrl + "/" + id, body, { headers }).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("Rethrown error", err);
        return of([]);
      })
    );
  }
  delete(id): Observable<any> {
    return this.http.delete(this._baseUrl + "/" + id).pipe(
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
