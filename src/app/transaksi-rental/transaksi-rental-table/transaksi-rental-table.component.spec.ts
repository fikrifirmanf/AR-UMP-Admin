import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiRentalTableComponent } from './transaksi-rental-table.component';

describe('TransaksiRentalTableComponent', () => {
  let component: TransaksiRentalTableComponent;
  let fixture: ComponentFixture<TransaksiRentalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiRentalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiRentalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
