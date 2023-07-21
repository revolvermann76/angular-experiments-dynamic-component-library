import { TestBed } from '@angular/core/testing';

import { FunkyButtonService } from './funky-button.service';

describe('FunkyButtonService', () => {
  let service: FunkyButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunkyButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
