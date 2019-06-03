import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingPage } from './staffing.page';

describe('StaffingPage', () => {
  let component: StaffingPage;
  let fixture: ComponentFixture<StaffingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
