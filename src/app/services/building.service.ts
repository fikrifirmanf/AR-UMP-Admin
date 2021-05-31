import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'app/url.constants';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  constructor(private http: HttpClient) {}

  private _baseUrl = env.apiUrl;
  getAll(): Observable<any> {
    const url = this._baseUrl + "building";
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
  getById(id): Observable<any> {
    const url = this._baseUrl + "building/" + id;
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
  getByType(id): Observable<any> {
    const url = this._baseUrl + "building/type/" + id;
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
  // post data rental
  create(body): Observable<any> {
    const url = this._baseUrl + "building";
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
    const url = this._baseUrl + "building/" + id;
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
    const url = this._baseUrl + "building/" + id;
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