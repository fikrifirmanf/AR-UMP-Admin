import { TestBed } from '@angular/core/testing';

import { TransaksiRentalService } from './transaksi-rental.service';

describe('TransaksiRentalService', () => {
  let service: TransaksiRentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaksiRentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
