import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkyButtonComponent } from './funky-button.component';

describe('FunkyButtonComponent', () => {
  let component: FunkyButtonComponent;
  let fixture: ComponentFixture<FunkyButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FunkyButtonComponent]
    });
    fixture = TestBed.createComponent(FunkyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
