import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'app/url.constants';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }
  private _baseUrl = env.apiUrl;
  getAll(): Observable<any> {
    const url = this._baseUrl + "statistics";
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
}
