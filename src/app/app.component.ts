import { Component } from '@angular/core';
import { defaultIfEmpty } from 'rxjs';
import { isBlock } from 'typescript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-app';

  count : number = 0;
  look : string = "look at the star"
  hidden:boolean=true;

  presidents: string[] = ["Higgins",
    "McAleese", "Robinson", "Hillery"];

president: any[] =
[{name: "Higgins", term:"2011-"},
{name: "McAleese", term:"1997-2011"},
{name: "Robinson", term:"1990-1997"},
{name: "Hillery", term:"1976-1990"},
{name: "O Dalaigh", term:"1974-1976"}];


  onClick(){
    this.count++;
  }
  disClick(){
    this.count--;

    if (this.count<=-1){
      this.count++;
    }
  }
  onDoubleClick(){
  
    if(this.hidden===false){
      this.hidden=true;
    }else{
      this.hidden=false;
    }
  }


}
