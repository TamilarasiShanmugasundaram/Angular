import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CenterComponent } from './todo/center/center.component';
import { HeaderComponent } from './todo/header/header.component';
import { LeftComponent } from './todo/left/left.component';
import { PageComponent } from './todo/page/page.component';
import { RightComponent } from './todo/right/right.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:'',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'right',component:RightComponent},
  {path:'leftCon',component:LeftComponent},
  {path:'center',component:CenterComponent},
  {path:'page',component:PageComponent,canActivate:[AuthGuardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

