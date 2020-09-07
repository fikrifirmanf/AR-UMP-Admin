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
  private _baseUrl = env.apiUrl + "users";
  getAllUsers(): Observable<any> {
    const headers = {
      "X-access-token": "test",
    };
    return this.http
      .get<any>(this._baseUrl, { headers })
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
  getById(id): Observable<any> {
    const headers = {
      "X-access-token": "test",
    };
    return this.http
      .get<any>(this._baseUrl + "/" + id, { headers })
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
    const url = this._baseUrl + "/type/" + id;
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

  create(body): Observable<any> {
    return this.http.post(this._baseUrl, body).pipe(
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
  update(id, body): Observable<any> {
    return this.http.patch(this._baseUrl + "/" + id, body).pipe(
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
