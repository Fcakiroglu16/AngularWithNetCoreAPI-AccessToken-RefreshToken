import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedPageComponent } from './authorized-page/authorized-page.component';
import { PublichPageComponent } from './publich-page/publich-page.component';

const routes: Routes = [
{path:"", redirectTo:"/auth-page", pathMatch:"full"},
{path:"auth-page",component:AuthorizedPageComponent},
{path:"publish-page",component:PublichPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
