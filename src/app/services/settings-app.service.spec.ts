import { TestBed } from '@angular/core/testing';

import { SettingsAppService } from './settings-app.service';

describe('SettingsAppService', () => {
  let service: SettingsAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
