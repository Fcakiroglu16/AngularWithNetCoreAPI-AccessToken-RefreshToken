import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-authorized-page',
  templateUrl: './authorized-page.component.html',
  styleUrls: ['./authorized-page.component.css']
})
export class AuthorizedPageComponent implements OnInit {

  constructor(private http:HttpClient,private tokenService:TokenService) { }

  ngOnInit(): void {

    this.automaticLogin();

  }


  automaticLogin() {
    this.http
      .post<any>('https://localhost:5001/api/Auth/CreateToken', {
        email: 'admin@outlook.com',
        password: 'Password12*',
      })
      .subscribe((x) => {
        console.log(x);
        let access_token = x.data.accessToken;
        let refresh_token = x.data.refreshToken;
     
        this.tokenService.setLocalStorage(access_token,refresh_token);
      });
  }

  getUser() {
    this.http.get<any>('https://localhost:5001/api/User').subscribe((x) => {
      console.log(x);
    });
  }
}
