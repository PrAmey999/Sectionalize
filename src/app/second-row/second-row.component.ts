import { Component, OnInit } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-second-row',
  templateUrl: './second-row.component.html',
  styleUrls: ['./second-row.component.css']
})
export class SecondRowComponent implements OnInit {

  faCamera = faCamera;
  constructor() { }

  ngOnInit(): void {
  }

}
