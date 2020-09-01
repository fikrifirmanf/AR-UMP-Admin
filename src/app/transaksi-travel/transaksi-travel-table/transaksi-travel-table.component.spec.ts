import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiTravelTableComponent } from './transaksi-travel-table.component';

describe('TransaksiTravelTableComponent', () => {
  let component: TransaksiTravelTableComponent;
  let fixture: ComponentFixture<TransaksiTravelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiTravelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiTravelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
