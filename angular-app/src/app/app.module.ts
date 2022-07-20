import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './token.interceptor';
import { PublichPageComponent } from './publich-page/publich-page.component';
import { AuthorizedPageComponent } from './authorized-page/authorized-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PublichPageComponent,
    AuthorizedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
