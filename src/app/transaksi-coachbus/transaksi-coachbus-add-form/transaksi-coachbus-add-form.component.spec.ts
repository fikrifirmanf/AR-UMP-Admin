import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiCoachbusAddFormComponent } from './transaksi-coachbus-add-form.component';

describe('TransaksiCoachbusAddFormComponent', () => {
  let component: TransaksiCoachbusAddFormComponent;
  let fixture: ComponentFixture<TransaksiCoachbusAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiCoachbusAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiCoachbusAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
