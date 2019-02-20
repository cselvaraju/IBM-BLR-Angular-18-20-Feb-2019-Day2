import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  name;
  actorList;
  text;

  constructor() { }

  ngOnInit() {
    this.name = 'Amitabh Bachhan';
    this.actorList = [
      {name: 'Amitabh Bachhan', city: 'Mumbai'},
      {name: 'Kamal Hasan', city: 'Chennai'},
      {name: 'Kajol', city: 'Mumbai'},
      {name: 'Jayapradha', city: 'Hyderabad'},
      {name: 'Rajnikant', city: 'Chennai'}
    ];

    this.text = 'Default text...';
  }

  btnClicked(e) {
    alert('OUCH!! That Hurt!\nPlease be gentle...');
    console.log(e);
  }
}
