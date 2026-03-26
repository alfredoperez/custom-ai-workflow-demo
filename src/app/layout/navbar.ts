import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a class="navbar-brand" routerLink="/">SuperDemo</a>
      <ul class="navbar-nav">
        <li><a routerLink="/">Home</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.75rem 1.5rem;
      background: #1a1a2e;
      color: #fff;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .navbar-brand {
      font-weight: 700;
      font-size: 1.25rem;
      color: #fff;
      text-decoration: none;
    }

    .navbar-nav {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 1rem;
    }

    .navbar-nav a {
      color: #ccc;
      text-decoration: none;
    }

    .navbar-nav a:hover {
      color: #fff;
    }
  `],
})
export class NavbarComponent {}
