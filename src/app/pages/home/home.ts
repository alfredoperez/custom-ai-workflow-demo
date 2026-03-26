import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main class="home">
      <h1>Welcome to the App</h1>
      <p>This is the home page. Start building something great.</p>
    </main>
  `,
  styles: [`
    .home {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
  `],
})
export class HomeComponent {}
