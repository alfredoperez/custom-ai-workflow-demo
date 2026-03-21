import { Component, signal } from '@angular/core';
import { ToolbarComponent } from 'ngx-dev-toolbar';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent],
  template: `
    <h1>Welcome to {{ title() }}!</h1>
    <ndt-toolbar />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('test-ng20');
}
