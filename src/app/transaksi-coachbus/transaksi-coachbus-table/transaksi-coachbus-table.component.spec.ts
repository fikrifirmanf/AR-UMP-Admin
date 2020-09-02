import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiCoachbusTableComponent } from './transaksi-coachbus-table.component';

describe('TransaksiCoachbusTableComponent', () => {
  let component: TransaksiCoachbusTableComponent;
  let fixture: ComponentFixture<TransaksiCoachbusTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiCoachbusTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiCoachbusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
