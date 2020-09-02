import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiTravelInvoiceComponent } from './transaksi-travel-invoice.component';

describe('TransaksiTravelInvoiceComponent', () => {
  let component: TransaksiTravelInvoiceComponent;
  let fixture: ComponentFixture<TransaksiTravelInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiTravelInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiTravelInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
