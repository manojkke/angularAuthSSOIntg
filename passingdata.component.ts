import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Alert } from 'selenium-webdriver';
 
@Component({
  selector: 'app-passingdata',
  templateUrl: './passingdata.component.html',
  styleUrls: ['./passingdata.component.css']
})
export class PassingdataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  manoj: boolean = false;
  manojCalss: number = 100;
  sample: number = 30;

  cool: any = 123123;

  setMyStyles(): any {
    let styles = {
      'color': 'red',
      'font-weight': 'bold'
    };
    return styles;
  }
 
  somethingcliked(parm1: string, parm2: Number): void {
    this.manojCalss = this.manojCalss + this.manojCalss;
  }

  manojInput() {
  }
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  somethingClickedInPAssingData(FromUI:string): void {
    this.countRadioButtonSelectionChanged.emit(this.manojCalss+"");
  }

} 

