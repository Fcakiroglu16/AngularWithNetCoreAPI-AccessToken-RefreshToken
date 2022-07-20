import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient,private tokenService:TokenService, private router:Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

// if(request.url.includes(''))


const token= this.tokenService.getLocalStorage();

    return next.handle(this.tokenService.getRequestWithToken(request,token.accessToken)).pipe(
      catchError((error:HttpErrorResponse) => {

        if (error.status === 401) {
       
          return this.http.post<any>('https://localhost:5001/api/Auth/CreateTokenByRefreshToken',{ token: token.refreshToken })
            .pipe(
              switchMap((x) => {

                let access_token = x.data.accessToken;
                let refresh_token = x.data.refreshToken;              
                this.tokenService.setLocalStorage(access_token,refresh_token);
                return next.handle(this.tokenService.getRequestWithToken(request,access_token));
              }),
              catchError((err:HttpErrorResponse) => {
                console.log(err);
                this.router.navigateByUrl("publish-page");
                return throwError(()=>err);
                 
     
              })
            );
        }
   
        return throwError(()=>error);
      })
    );

    
  }
}
