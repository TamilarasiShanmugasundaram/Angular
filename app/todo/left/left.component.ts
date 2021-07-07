import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataModelService } from 'src/app/data-model.service';


@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent {
  
  id = 1;
  constructor(private http : HttpClient, private router: Router, private dataModel : DataModelService) { }

  dbCategory :any  =   this.http.get('http://localhost:3500/get');

  
  category = [
    {title:"My Day", symbol:"fas fa-sun",id:this.id++},  
    {title:"Important", symbol:"fas fa-star",id:this.id++},  
    {title:"Planned", symbol:"fas fa-calendar-alt",id:this.id++},  
    {title:"Assigned to you", symbol:"fas fa-user",id:this.id++},  
    {title:"Tasks", symbol:"fas fa-sun",id:this.id++}
  ];

  inputValue: any = null;
  categoryName: any = null;

  onSubmit($event:any){
    console.log('das');
    if($event.keyCode === 13 && this.inputValue != null){
       const item = {
        title :  this.inputValue,
        symbol : "fas fa-list",
        id:this.id++
      }
      this.category.push(item);
     //this.http.get("http://localhost:3500/add",this.inputValue);  
     console.log('angular left')
      this.http.post('http://localhost:8080/add',{params:this.inputValue}).subscribe ((response) => {
        console.log(response);
      });
      this.inputValue = null;
    }
  }
    
  onClick(param:any) {
    this.dataModel.renderTask(param); 
  }
}

