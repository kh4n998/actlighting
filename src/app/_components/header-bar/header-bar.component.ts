import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'act-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  scrollDown: boolean = false;
  constructor() { }

  ngOnInit(): void {
    fromEvent(window, 'scroll').subscribe(() => {
      const coordY = window.scrollY;
      this.scrollDown = coordY !== 0;
    })
  }

}
