import { TestBed } from '@angular/core/testing';

import { BiroTravelService } from './biro-travel.service';

describe('BiroTravelService', () => {
  let service: BiroTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiroTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
