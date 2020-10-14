import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'app/url.constants';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BiroTravelService {

  constructor(private http:HttpClient) { }
  private _baseUrl = env.apiUrl;
  getAll():Observable<any>{
    return this.http.get(this._baseUrl+'/birotravel').pipe(map((res)=>res),catchError((err)=>{
      console.log(err)
      return throwError(err)
    }),finalize(()=>null),catchError((err)=>{console.log(err)
      return of([])}),finalize(()=>null))
  }
  getById(id):Observable<any>{
    return this.http.get(this._baseUrl+'/birotravel/'+id).pipe(map((res)=>res),catchError((err)=>{
      console.log(err)
      return throwError(err)
    }),finalize(()=>null),catchError((err)=>{console.log(err)
      return of([])}),finalize(()=>null))
  }
  create(body):Observable<any>{
    return this.http.post(this._baseUrl+'/birotravel',body).pipe(map((res)=>res),catchError((err)=>{
      console.log(err)
      return throwError(err)
    }),finalize(()=>null),catchError((err)=>{console.log(err)
      return of([])}),finalize(()=>null))
  }
  update(id,body):Observable<any>{
    return this.http.patch(this._baseUrl+'/birotravel/'+id,body).pipe(map((res)=>res),catchError((err)=>{
      console.log(err)
      return throwError(err)
    }),finalize(()=>null),catchError((err)=>{console.log(err)
      return of([])}),finalize(()=>null))
  }
  delete(id):Observable<any>{
    return this.http.delete(this._baseUrl+'/birotravel/'+id).pipe(map((res)=>res),catchError((err)=>{
      console.log(err)
      return throwError(err)
    }),finalize(()=>null),catchError((err)=>{console.log(err)
      return of([])}),finalize(()=>null))
  }
}
