import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from 'ngx-dev-toolbar';
import { NavbarComponent } from './layout/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, NavbarComponent],
  template: `
    <app-navbar />
    <router-outlet />
    <ndt-toolbar />
  `,
  styles: [],
})
export class App {}

