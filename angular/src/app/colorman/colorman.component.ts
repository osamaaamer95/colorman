import { Component, OnInit } from '@angular/core';
import Colorman from 'colorman';

@Component({
  selector: 'app-colorman',
  templateUrl: './colorman.component.html',
  styleUrls: ['./colorman.component.scss'],
})
export class ColormanComponent implements OnInit {
  colormanHandle;
  config: any;
  elementToDraw: any;

  constructor() {
    this.colormanHandle = Colorman({
      myFirstId: '123',
      mySecondId: '456',
    });
  }

  ngOnInit(): void {
    this.config = this.colormanHandle.getConfig();
    this.colormanHandle.renderSomethingNice('draw');
  }
}
