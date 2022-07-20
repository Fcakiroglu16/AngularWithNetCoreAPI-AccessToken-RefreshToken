import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from './models/token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  setLocalStorage(accessToken:string,refreshToken:string) {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
  }

  getLocalStorage(): Token {
    return {
      accessToken: localStorage.getItem('access_token')!,
      refreshToken: localStorage.getItem('refresh_token')!,
    };
  }

  getRequestWithToken(request: HttpRequest<unknown>, token: string) {
    return request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token),
    });
  }
}
