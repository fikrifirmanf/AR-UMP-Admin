import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";
import { env } from "app/url.constants";

@Injectable({
  providedIn: "root",
})
export class TransaksiRentalService {
  constructor(private http: HttpClient) {}

  private _baseUrl = env.apiUrl + "order/";

  getAll(): Observable<any> {
    const url = this._baseUrl + "rental";
    const headers = {};
    return this.http.get<any>(url).pipe(
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
  // get by Id
  getById(id): Observable<any> {
    const url = this._baseUrl + "rental/" + id;
    const headers = {
      "Content-type": "application/json",
    };
    return this.http.get(url, { headers }).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        console.log("error mapping fallback", err);
        return of([]);
      }),
      finalize(() => null)
    );
  }
  // post transaksi
  create(body): Observable<any> {
    const url = this._baseUrl + "rental";

    const headers = {
      "Content-type": "application/json",
    };
    return this.http
      .post<any>(url, body, { headers })
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
  // post data rental
  update(id, body): Observable<any> {
    const url = this._baseUrl + "rental/" + id;
    const headers = {
      "Content-type": "application/json",
      // "X-access-token ": "test",
    };
    return this.http
      .patch<any>(url, body, { headers })
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
  // delete rental
  delete(id): Observable<any> {
    const url = this._baseUrl + "rental/" + id;
    return this.http.delete<any>(url).pipe(
      map((res) => res),
      catchError((err) => {
        return throwError(err);
      }),
      finalize(null),
      catchError((err) => {
        return of([]);
      }),
      finalize(null)
    );
  }
}
