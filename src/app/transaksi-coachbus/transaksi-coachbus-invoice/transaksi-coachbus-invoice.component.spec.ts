import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiCoachbusInvoiceComponent } from './transaksi-coachbus-invoice.component';

describe('TransaksiCoachbusInvoiceComponent', () => {
  let component: TransaksiCoachbusInvoiceComponent;
  let fixture: ComponentFixture<TransaksiCoachbusInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiCoachbusInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiCoachbusInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
