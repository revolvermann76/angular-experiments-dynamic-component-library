import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lib-funky-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>funky-button works!</p> `,
  styles: [],
})
export class FunkyButtonComponent {}
