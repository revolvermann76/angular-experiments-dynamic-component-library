import { Component, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunkyButtonComponent } from '../../../component-library/dist/funky-button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FunkyButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-application-standalone';
  constructor(private viewContainerRef: ViewContainerRef) {}
}
