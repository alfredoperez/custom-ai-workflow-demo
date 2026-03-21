import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from 'ngx-dev-toolbar';
import { NavBarComponent } from './layout/nav-bar';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, RouterOutlet, NavBarComponent],
  template: `
    <app-nav-bar />
    <router-outlet />
    <ndt-toolbar />
  `,
  styles: [],
})
export class App {}
