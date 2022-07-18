import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username=""
  indicator=true;

  checktStatusOfInput(event:Event){

    
    if(((<HTMLInputElement>event.target).value).length>0)
    {
      this.indicator=false
  }
  else
  this.indicator=true;
  }
  resetValue(){
    this.username="";
  }
}
