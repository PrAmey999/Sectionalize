import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-first-row',
  templateUrl: './first-row.component.html',
  styleUrls: ['./first-row.component.css']
})
export class FirstRowComponent implements OnInit {

  faCog = faCog;
  faUserAlt = faUserAlt;
  faMobileAlt = faMobileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
