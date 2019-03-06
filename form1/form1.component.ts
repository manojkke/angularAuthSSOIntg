import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  private data:Observable<Array<number>>;
  private data1:Observable<Array<string>>;
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  


  submitted=false;

  onsubmited()
  {
    this.submitted=true;
  }
  get diagnostic() { return JSON.stringify(this.model); }
  
  constructor() { }

 
  ngOnInit() {

    //this.data=new Observable(observer=>)

    this.data1=new Observable(f=>{

       f.next();

    })

    this.data1.subscribe()
  }

}
