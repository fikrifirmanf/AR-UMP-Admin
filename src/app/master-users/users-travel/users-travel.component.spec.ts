import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTravelComponent } from './users-travel.component';

describe('UsersTravelComponent', () => {
  let component: UsersTravelComponent;
  let fixture: ComponentFixture<UsersTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
