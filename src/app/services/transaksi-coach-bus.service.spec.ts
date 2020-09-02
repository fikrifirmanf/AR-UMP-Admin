import { TestBed } from '@angular/core/testing';

import { TransaksiCoachBusService } from './transaksi-coach-bus.service';

describe('TransaksiCoachBusService', () => {
  let service: TransaksiCoachBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaksiCoachBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
