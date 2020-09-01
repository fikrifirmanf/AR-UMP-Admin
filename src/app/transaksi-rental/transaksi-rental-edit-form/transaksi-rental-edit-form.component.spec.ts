import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiRentalEditFormComponent } from './transaksi-rental-edit-form.component';

describe('TransaksiRentalEditFormComponent', () => {
  let component: TransaksiRentalEditFormComponent;
  let fixture: ComponentFixture<TransaksiRentalEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiRentalEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiRentalEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
