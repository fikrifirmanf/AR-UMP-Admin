import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RentalService {
  constructor(private http: HttpClient) {}
  _baseUrl = "http://13.212.50.150/api/";
  // get rental data
  getAll(): Observable<any> {
    const url = this._baseUrl + "cars";
    const headers = {
      "X-access-token ": "test",
    };
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
  // get byId
  getById(id): Observable<any> {
    const url = this._baseUrl + "cars/" + id;
    const headers = {
      "X-access-token": "test",
    };
    return this.http.get<any>(url).pipe(
      map((res) => res),
      catchError((err) => {
        console.log("Mapping error", err);
        return throwError(err);
      }),
      finalize(() => null),
      catchError((err) => {
        return of([]);
      }),
      finalize(() => null)
    );
  }
  // post data rental
  create(body): Observable<any> {
    const url = this._baseUrl + "cars";
    const headers = {
      "Content-type": "application/json",
      // "X-access-token ": "test",
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
    const url = this._baseUrl + "cars/" + id;
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
    const url = this._baseUrl + "cars/" + id;
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
