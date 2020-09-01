import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiRentalInvoiceComponent } from './transaksi-rental-invoice.component';

describe('TransaksiRentalInvoiceComponent', () => {
  let component: TransaksiRentalInvoiceComponent;
  let fixture: ComponentFixture<TransaksiRentalInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiRentalInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiRentalInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
