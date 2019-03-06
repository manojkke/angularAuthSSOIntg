import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap Material Notification Trial';
  age=20;


  somethingClickedInPAssingDataPArentHandler(fromChild:string): void {
    alert(fromChild);
}
  
}
