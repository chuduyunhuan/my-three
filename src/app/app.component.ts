import { AfterViewInit, Component, OnInit } from '@angular/core';

import { World } from './World/World';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  initWorld() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container') as Element;

    // create a new world
    const world = new World(container);

    // start the animation loop
    world.render();
  }

  ngOnInit() {
    this.initWorld();
  }

  ngAfterViewInit() {}
}
