import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MyserviceService } from './myservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodoModule } from './todo/todo.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //routingComponents,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,                             
    AppRoutingModule,
    FormsModule,
    TodoModule,
    RouterModule
    //ReactiveFormsModule
  ],
  // providers: [MyserviceService],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
