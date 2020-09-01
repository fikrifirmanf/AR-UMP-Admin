import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiRentalAddFormComponent } from './transaksi-rental-add-form.component';

describe('TransaksiRentalAddFormComponent', () => {
  let component: TransaksiRentalAddFormComponent;
  let fixture: ComponentFixture<TransaksiRentalAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiRentalAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiRentalAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
