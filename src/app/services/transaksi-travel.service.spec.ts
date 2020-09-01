import { TestBed } from '@angular/core/testing';

import { TransaksiTravelService } from './transaksi-travel.service';

describe('TransaksiTravelService', () => {
  let service: TransaksiTravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaksiTravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
