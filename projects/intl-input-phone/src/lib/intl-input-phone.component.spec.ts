import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlInputPhoneComponent } from './intl-input-phone.component';

describe('IntlInputPhoneComponent', () => {
  let component: IntlInputPhoneComponent;
  let fixture: ComponentFixture<IntlInputPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlInputPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlInputPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
