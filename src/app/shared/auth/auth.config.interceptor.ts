import { Injectable } from "@angular/core";
import "rxjs/add/operator/catch";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from "@angular/common/http";
import { AuthService } from "../../services/auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    if (authToken) {
      req = req.clone({
        setHeaders: {
          "x-access-token": authToken,
        },
      });
    }

    return next.handle(req).catch((err) => {
      // onError
      console.log(err);
      if (err instanceof HttpErrorResponse) {
        console.log(err.status);
        console.log(err.statusText);
        if (err.status === 401) {
          this.router.navigateByUrl("login");
        }
      }
      return Observable.throw(err);
    }) as any;
  }
}
