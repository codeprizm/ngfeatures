import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get today(): string {
    switch (new Date().getDay()) {
      case 1:
        return 'Nope!! it\'s still Monday, you just enjpyed a weekend,  gotta wait for 3 more days';
      case 2:
        return 'Nah! it\'s still Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'No it\'s Thursday! on the bright side, we are so close.';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
    }
  }

}
