import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  id = 1;
  constructor() { }
  category = [
    {title:"My Day", symbol:"fas fa-sun",id:this.id++},  
    {title:"Important", symbol:"fas fa-star",id:this.id++},  
    {title:"Planned", symbol:"fas fa-calendar-alt",id:this.id++},  
    {title:"fas fa-plus", symbol:"fas fa-user",id:this.id++},  
    {title:"Tasks", symbol:"fas fa-sun",id:this.id++}
  ];
  ngOnInit(): void {
  }
  clicked(event:string) {
   alert(event);
  }

  inputValue: any = null;
  newCategory: string = '';
  onSubmit($event: { keyCode: number; }){
    if($event.keyCode === 13 && this.inputValue != null){
      this.newCategory = this.inputValue;
       const item = {
        title :  this.newCategory,
        symbol : "fas fa-list",
        id:this.id++
      }
      this.category.push(item);
      this.inputValue = null;
    }
  }
}

