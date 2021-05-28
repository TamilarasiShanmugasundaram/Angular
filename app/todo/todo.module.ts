import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';
import { RightComponent } from './right/right.component';
import { CenterComponent } from './center/center.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LeftComponent,
    PageComponent,
    RightComponent,
    CenterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class TodoModule { }
