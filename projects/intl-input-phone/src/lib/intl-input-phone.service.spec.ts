import { TestBed } from '@angular/core/testing';

import { IntlInputPhoneService } from './intl-input-phone.service';

describe('IntlInputPhoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntlInputPhoneService = TestBed.get(IntlInputPhoneService);
    expect(service).toBeTruthy();
  });
});
