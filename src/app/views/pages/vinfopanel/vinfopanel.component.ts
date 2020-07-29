import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-vinfopanel',
  templateUrl: './vinfopanel.component.html',
  styleUrls: ['./vinfopanel.component.scss']
})
export class VinfopanelComponent implements OnInit {
  mapflag = false
  constructor() { }

  ngOnInit() {
  }
  showmap() {
    setTimeout(function(){this.mapflag = true}.bind(this),500);
  }
}
