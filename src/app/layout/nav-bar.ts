import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <span class="app-title">test-ng20</span>
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
        Home
      </a>
    </nav>
  `,
  styles: [
    `
      nav {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 1.5rem;
        background: #1a1a2e;
        color: #fff;
      }
      .app-title {
        font-weight: bold;
        margin-right: 1rem;
      }
      a {
        color: #ccc;
        text-decoration: none;
      }
      a.active {
        color: #fff;
        font-weight: bold;
      }
    `,
  ],
})
export class NavBarComponent {}
