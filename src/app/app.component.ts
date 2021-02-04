import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'temp';
  first = 'background-color: rgb(255, 0, 0);';
  second = 'background-color: rgb(255, 128, 0);';
  third = 'background-color: rgb(255, 255, 0);';
  fourth = 'background-color: rgb(0,255,0);';
  fifth = 'background-color: rgb(0,255,255);';
  sixth = 'background-color: rgb(0,0,255);';
  seventh = 'background-color: rgb(255,0,255);';

  collapse () {
    this.first += "visibility: collapse;";
    this.second += "visibility: collapse;";
    this.third += "visibility: collapse;";
    this.fourth += "visibility: collapse;";
    this.fifth += "visibility: collapse;";
    this.sixth += "visibility: collapse;";
    this.seventh += "visibility: collapse;";
  }

  expand () {
    this.first = this.first.replace("collapse" , "visible");
    this.second = this.second.replace("collapse" , "visible");
    this.third = this.third.replace("collapse" , "visible");
    this.fourth = this.fourth.replace("collapse" , "visible");
    this.fifth = this.fifth.replace("collapse" , "visible");
    this.sixth = this.sixth.replace("collapse" , "visible");
    this.seventh = this.seventh.replace("collapse" , "visible");
  }
}
