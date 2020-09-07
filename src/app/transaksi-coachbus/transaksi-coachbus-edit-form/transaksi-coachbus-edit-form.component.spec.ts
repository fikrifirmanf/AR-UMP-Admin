import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiCoachbusEditFormComponent } from './transaksi-coachbus-edit-form.component';

describe('TransaksiCoachbusEditFormComponent', () => {
  let component: TransaksiCoachbusEditFormComponent;
  let fixture: ComponentFixture<TransaksiCoachbusEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiCoachbusEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiCoachbusEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
