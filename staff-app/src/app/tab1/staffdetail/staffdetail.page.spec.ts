import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffdetailPage } from './staffdetail.page';

describe('StaffdetailPage', () => {
  let component: StaffdetailPage;
  let fixture: ComponentFixture<StaffdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
