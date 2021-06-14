import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './todo/page/page.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:'',component:LoginComponent},
  // {path:'header',component:HeaderComponent},
  // {path:'right',component:RightComponent},
  // {path:'leftCon',component:LeftComponent},
  // {path:'center',component:CenterComponent},
  //{path:'page',component:PageComponent,canActivate:[AuthGuardGuard]}
  {path:'page',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

